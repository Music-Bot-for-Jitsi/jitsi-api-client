import ChatRoom from '../xmpp/ChatRoom.d.ts';
import JibriSession from './JibriSession.d.ts';
import Jibri from './recordingConstants.d.ts';

export default class RecordingManager {
  constructor( chatRoom: ChatRoom ); // TODO: jsdocs says return type is void
  getSession: ( sessionID: string ) => JibriSession | undefined;
  onPresence: ( { fromHiddenDomain: Node, presence: boolean } ) => void;
  startRecording: ( options: { appData: string, broadcastId?: string, mode: Jibri.mode, streamId?: string } ) => Promise<unknown>;
  stopRecording: ( sessionID: string ) => Promise<unknown>;
}
