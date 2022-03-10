import JitsiConnection from '../../JitsiConnection.d.ts';
import JitsiLocalTrack from '../RTC/JitsiLocalTrack.d.ts';

export default class ProxyConnectionService {
  constructor( options: {
    convertVideoToDesktop: boolean,
    iceConfig: unknown, // TODO:
    jitsiConnection: JitsiConnection,
    onRemoteStream: ( params: unknown ) => unknown, // TODO:
    onSendMessage: ( params: unknown ) => unknown // TODO:
  } );
  processMessage: ( message: { data: { iq: string }, from: string } ) => void;
  start: ( peerJid: string, localTracks?: JitsiLocalTrack[] ) => void;
  stop: () => void;
}
