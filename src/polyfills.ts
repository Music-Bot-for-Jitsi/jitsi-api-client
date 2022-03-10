import jsdom from 'https://dev.jspm.io/jsdom'
import { createRequire } from "https://deno.land/std/node/module.ts";
import { JitsiMeetJSType } from "../types/lib-jitsi-meet/JitsiMeetJS.d.ts";
const require = createRequire(import.meta.url);
const werift = require("werift")

export async function init(domain: string): Promise<JitsiMeetJSType> {
    // define UserAgent which is required by JitsiMeetJS
    Object.defineProperty(navigator, 'userAgent', {
        get: function () { return 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0)'; }
    });

    // Use jsdom to create a document element.
    const { JSDOM } = jsdom as any;
    var dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
    (globalThis as any).document = dom.window.document

    (globalThis as any).RTCPeerConnection = werift.RTCPeerConnection;

    await import(`https://${domain}/libs/lib-jitsi-meet.min.js`);
    const JitsiMeetJS: JitsiMeetJSType = (globalThis as any).JitsiMeetJS;
    return JitsiMeetJS;
}

export default { init }
