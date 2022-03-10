import SignalingLayer, { PeerMediaInfo } from '../../service/RTC/SignalingLayer.d.ts';
import ChatRoom from './ChatRoom.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';

declare class SignalingLayerImpl extends SignalingLayer {
  constructor();
  setChatRoom: ( room: ChatRoom ) => void;
  getPeerMediaInfo: ( owner: string, mediaType: MediaType ) => PeerMediaInfo | null;
  getSSRCOwner: ( ssrc: number ) => string | null;
  setSSRCOwner: ( ssrc: number, endpointId: string ) => void;
}
