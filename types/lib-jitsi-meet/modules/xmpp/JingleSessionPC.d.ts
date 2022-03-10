import JingleSession from './JingleSession.d.ts';
import XmppConnection from './XmppConnection.d.ts';
import JitsiLocalTrack from '../RTC/JitsiLocalTrack.d.ts';
import { CodecMimeType } from '../../service/RTC/CodecMimeType.d.ts';
import JitsiRemoteTrack from '../RTC/JitsiRemoteTrack.d.ts';

export default class JingleSessionPC extends JingleSession {
  static parseVideoSenders: ( jingleContents: any ) => string | null;
  static parseMaxFrameHeight: ( jingleContents: any ) => number | null;
  constructor( sid: string, localJid: string, remoteJid: string, connection: XmppConnection, mediaConstraints: unknown, iceConfig: unknown, isP2P: boolean, isInitiator: boolean ); // TODO:
  doInitialize: ( options: {} ) => void;
  getRemoteRecvMaxFrameHeight: () => number | undefined;
  sendIceCandidate: ( candidate: RTCIceCandidate ) => void;
  sendIceCandidates: ( candidates: RTCIceCandidate[] ) => void;
  sendIceFailedNotification: () => void;
  addIceCandidates: ( elem: unknown ) => void; // TODO:
  readSsrcInfo: ( contents: unknown ) => void; // TODO:
  generateRecvonlySsrc: () => void;
  getConfiguredVideoCodec: () => CodecMimeType;
  acceptOffer: ( jingleOffer: any, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  invite: ( localTracks?: JitsiLocalTrack[] ) => void;
  sendSessionInitiate: ( offerSdp: string ) => void;
  setAnswer: ( jingleAnswer: unknown ) => void; // TODO:
  setOfferAnswerCycle: ( jingleOfferAnswerIq: any, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  setVideoCodecs: ( preferred?: CodecMimeType, disabled?: CodecMimeType ) => void;
  replaceTransport: ( jingleOfferElem: unknown, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendSessionAccept: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendContentModify: () => void;
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  sendTransportAccept: ( localSDP: unknown, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  sendTransportReject: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown ) => void; // TODO:
  setSenderMaxBitrates: () => Promise<void>;
  setSenderVideoConstraint: ( maxFrameHeight: number ) => Promise<unknown>; // TODO:
  setSenderVideoDegradationPreference: () => Promise<void>;
  terminate: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, options: { reason: string, reasonDescription: string, requestRestart?: boolean, sendSessionTerminate?: boolean } ) => void; // TODO:
  onTerminated: ( reasonCondition: unknown, reasonText: unknown ) => void; // TODO:
  onXmppStatusChanged: ( status: Strophe.Status ) => void;
  addRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStreamsOnLeave: ( id: string ) => Promise<JitsiRemoteTrack>;
  replaceTrack: ( oldTrack: JitsiLocalTrack | null, newTrack: JitsiLocalTrack | null ) => Promise<unknown>; // TODO:
  addTrackAsUnmute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  removeTrackAsMute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  setMediaTransferActive: ( audioActive: boolean, videoActive: boolean ) => Promise<unknown>; // TODO:
  modifyContents: ( jingleContents: any ) => void;
  notifyMySSRCUpdate: ( oldSDP: unknown, newSDP: unknown ) => void; // TODO:
  newJingleErrorHandler: ( request: unknown, failureCb: ( error: Error ) => void ) => ( this: JingleSessionPC ) => unknown; // TODO:
  getIceConnectionState: () => unknown; // TODO:
  close: () => void;
  toString: () => string;
}
