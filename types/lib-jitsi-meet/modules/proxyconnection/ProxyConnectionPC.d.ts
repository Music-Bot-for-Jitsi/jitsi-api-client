import JitsiLocalTrack from '../RTC/JitsiLocalTrack.d.ts';

export default class ProxyConnectionPC {
  constructor( options?: {
    iceConfig: unknown; // TODO:
    isInitiator: boolean;
    onRemoteStream: ( params: unknown ) => unknown; // TODO:
    peerJid: string;
    receiveVideo: boolean;
    onSendMessage: ( params: unknown ) => unknown; // TODO:
  } );
  getPeerJid: () => string;
  processMessage: ( $jingle: unknown ) => void; // TODO: surely there shouldn't be a dependency on jQuery
  start: ( localTracks?: JitsiLocalTrack[] ) => void;
  stop: () => void;
}
