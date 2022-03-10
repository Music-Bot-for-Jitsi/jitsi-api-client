import EventEmitter from 'https://deno.land/std/node/_events.d.ts';
import JitsiConference from '../../JitsiConference.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';
import { VideoType } from '../../service/RTC/VideoType.d.ts';
import TraceablePeerConnection from './TraceablePeerConnection.d.ts';

export default class JitsiTrack extends EventEmitter {
  constructor( conference: JitsiConference, stream: unknown, track: unknown, streamInactiveHandler: unknown, trackMediaType: unknown, videoType: unknown ); // TODO:
  disposed: boolean;
  getVideoType: () => VideoType;
  getType: () => MediaType;
  isAudioTrack: () => boolean;
  isWebRTCTrackMuted: () => boolean;
  isVideoTrack: () => boolean;
  isLocal: () => boolean;
  isLocalAudioTrack: () => boolean;
  getOriginalStream: () => any;
  getStreamId: () => string | null;
  getTrack: () => any;
  getTrackLabel: () => string;
  getTrackId: () => string | null;
  getUsageLabel: () => string;
  attach: ( container: any ) => void;
  detach: ( container: any ) => void;
  dispose: () => void;
  isScreenSharing: () => boolean;
  getId: () => string | null;
  isActive: () => boolean;
  setAudioLevel: ( audioLevel: number, tpc: TraceablePeerConnection ) => void;
  getMSID: () => string | null;
  setAudioOutput: ( audioOutputDeviceId: '' | string ) => Promise<unknown>; // TODO: what will this promise contain?
  addEventListener: (type: string, listener: (event: any) => void) => void;
}
