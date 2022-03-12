import jsdom from 'https://esm.sh/jsdom';
import neoXhr from 'https://dev.jspm.io/neo-xhr';
import xmldom from 'https://cdn.skypack.dev/@xmldom/xmldom';
import { createRequire } from 'https://deno.land/std/node/module.ts';
import { JitsiMeetJSType } from '../types/lib-jitsi-meet/JitsiMeetJS.d.ts';

type PolyXMLHttpRequest = XMLHttpRequest & { new (): XMLHttpRequest; prototype: XMLHttpRequest };

interface IGlobalPoly {
  document: Document;
  require: ReturnType<typeof createRequire>;
  DOMParser: typeof xmldom.DOMParser;
  JitsiMeetJS: JitsiMeetJSType;
  RTCPeerConnection: RTCPeerConnection;
  XMLHttpRequest: PolyXMLHttpRequest;
}

type GlobalPolyType = typeof globalThis & IGlobalPoly;
const globalPoly = globalThis as GlobalPolyType;

// require werift from node_modules, as no Deno-compatible CDN was found yet
const require = createRequire(import.meta.url);
globalPoly.require = require;
const werift = require('werift');

/**
 * Add the missing browser API's to the globalThis object.
 *
 * @param instance - The domain of the target jitsi instance
 * @returns A Promise of the JitsiMeetJS API object
 */
export async function init(instance: string): Promise<JitsiMeetJSType> {
  // define UserAgent which is required by JitsiMeetJS
  Object.defineProperty(navigator, 'userAgent', {
    get: function () {
      return 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0)';
    },
  });

  // use jsdom to create a document element.
  const { JSDOM } = jsdom;
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
  globalPoly.document = dom.window.document;
  globalPoly.DOMParser = xmldom.DOMParser;

  // use typescript implementation of WebRTC since this Web API is not supported natively in Deno
  globalPoly.RTCPeerConnection = werift.RTCPeerConnection;

  // use XMLHttpRequest polyfill, this will not be added to Deno at all because it is legacy stuff
  const { XMLHttpRequest } = neoXhr as ({ XMLHttpRequest: PolyXMLHttpRequest });
  Object.defineProperty(XMLHttpRequest.prototype, 'responseXML', {
    get() {
      const { responseText } = (this as XMLHttpRequest);
      return new DOMParser().parseFromString(responseText, 'text/xml');
    },
  });
  globalPoly.XMLHttpRequest = XMLHttpRequest;

  // disable console trace to reduce spam as the jitsi xmpp strophe makes intensive use of it
  console.trace = () => {};

  // dynamically import the jitsi-meet library from the given instance (requires jquery)
  await import('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
  await import(`https://${instance}/libs/lib-jitsi-meet.min.js`);
  const JitsiMeetJS: JitsiMeetJSType = globalPoly.JitsiMeetJS;
  return JitsiMeetJS;
}

export default { init };
