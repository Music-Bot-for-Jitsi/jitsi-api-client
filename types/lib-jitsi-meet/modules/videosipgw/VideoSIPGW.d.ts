import { VideoSIPGWConstants } from './VideoSIPGWConstants.d.ts';
import JitsiVideoSIPGWSession from './JitsiVideoSIPGWSession.d.ts';
import ChatRoom from '../xmpp/ChatRoom.d.ts';

declare class VideoSIPGW {
  constructor( chatRoom: ChatRoom );
  handleJibriSIPState: ( node: { attributes?: { state?: VideoSIPGWConstants, sipaddress?: string, failure_reason?: string } } ) => void;
  createVideoSIPGWSession: ( sipAddress: string, displayName: string ) => JitsiVideoSIPGWSession | Error;
  sessionStateChanged: ( event: { address: string, oldState: VideoSIPGWConstants, newState: VideoSIPGWConstants, displayName: string } ) => void;
}
