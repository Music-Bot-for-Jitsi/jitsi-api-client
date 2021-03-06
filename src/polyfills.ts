/**
 * JSDOM and XHR polyfills are imported without types
 * because of conflicting type definitions with Deno.
 */
import jsdom from 'https://dev.jspm.io/jsdom';
import neoXhr from 'https://dev.jspm.io/neo-xhr';
import xmldom from 'https://cdn.skypack.dev/@xmldom/xmldom';
import { createRequire } from 'https://deno.land/std/node/module.ts';
import { JitsiMeetJSType } from '../types/lib-jitsi-meet/JitsiMeetJS.d.ts';
import * as werift from '../bundles/werift.min.js';

type PolyJSDOM = { JSDOM: { new (content: string): { window: { document: unknown } } } };
type PolyWebRTC = { RTCPeerConnection: unknown };
type PolyXMLHttpRequest = {
  new (): PolyXMLHttpRequest;
  prototype: PolyXMLHttpRequest;
  responseText: string;
};

interface IGlobalPoly {
  document: unknown;
  require: ReturnType<typeof createRequire>;
  DOMParser: typeof xmldom.DOMParser;
  JitsiMeetJS: JitsiMeetJSType;
  RTCPeerConnection: unknown;
  XMLHttpRequest: PolyXMLHttpRequest;
}

type GlobalPolyType = typeof globalThis & IGlobalPoly;
const globalPoly = globalThis as GlobalPolyType;

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

  // use jsdom to create a document element
  const { JSDOM } = jsdom as PolyJSDOM;
  const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
  globalPoly.document = dom.window.document;
  globalPoly.DOMParser = xmldom.DOMParser;

  // use typescript implementation of WebRTC since this Web API is not supported natively in Deno
  globalPoly.RTCPeerConnection = (werift as PolyWebRTC).RTCPeerConnection;

  // use XMLHttpRequest polyfill, this will not be added to Deno at all because it is legacy stuff
  const { XMLHttpRequest } = neoXhr as ({ XMLHttpRequest: PolyXMLHttpRequest });
  Object.defineProperty(XMLHttpRequest.prototype, 'responseXML', {
    get() {
      const { responseText } = (this as PolyXMLHttpRequest);
      return new xmldom.DOMParser().parseFromString(responseText, 'text/xml');
    },
  });
  globalPoly.XMLHttpRequest = XMLHttpRequest;

  // disable console trace to reduce spam as the jitsi xmpp strophe makes intensive use of it
  console.trace = () => {};

  // define global require function which is used in lib-jitsi-meet
  const require = createRequire(import.meta.url);
  globalPoly.require = require;

  // dynamically import the jitsi-meet library from the given instance (requires jquery)
  await import('https://code.jquery.com/jquery-3.6.0.min.js');
  await import(`https://${instance}/libs/lib-jitsi-meet.min.js`);
  const JitsiMeetJS: JitsiMeetJSType = globalPoly.JitsiMeetJS;
  return JitsiMeetJS;
}

export default { init };
