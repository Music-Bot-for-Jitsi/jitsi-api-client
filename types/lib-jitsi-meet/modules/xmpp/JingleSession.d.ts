import ChatRoom from './ChatRoom.d.ts';
import XmppConnection from './XmppConnection.d.ts';
import { JingleSessionState } from './JingleSessionState.d.ts';
import RTC from '../RTC/RTC.d.ts';
import Listenable from '../util/Listenable.d.ts';

export default class JingleSession extends Listenable {
  constructor( sid: string, localJid: string, remoteJid: string, connection: XmppConnection, mediaConstraints: unknown, iceConfig: unknown, isInitiator: boolean ); // TODO:
  initiatorJid: () => string;
  responderJid: () => string;
  initialize: ( room: ChatRoom, rtc: RTC, options: unknown ) => void; // TODO:
  doInitialize: ( options: unknown ) => void; // TODO:
  addIceCandidates: ( contents: unknown ) => void; // TODO:
  getState: () => JingleSessionState;
  addSources: ( contents: unknown ) => void; // TODO:
  removeSources: ( contents: unknown ) => void; // TODO:
  terminate: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, options: { reason: string, reasonDescription: string, requestRestart?: boolean, sendSessionTerminate?: boolean } ) => void; // TODO:
  acceptOffer: ( jingle: unknown, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
}
