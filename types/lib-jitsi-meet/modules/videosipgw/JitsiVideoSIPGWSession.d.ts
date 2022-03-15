import { VideoSIPGWConstants } from './VideoSIPGWConstants.d.ts';
import Listenable from '../util/Listenable.d.ts';
import ChatRoom from '../xmpp/ChatRoom.d.ts';

export default class JitsiVideoSIPGWSession extends Listenable {
  constructor( sipAddress: string, displayName: string, chatRoom: ChatRoom );
  stop: () => void;
  start: () => void;
  setState: ( newState: VideoSIPGWConstants, failureReason?: string ) => void;
  addStateListener: ( listener: ( params: unknown ) => unknown ) => void;
  removeStateListener: ( listener: ( params: unknown ) => unknown ) => void;
}
