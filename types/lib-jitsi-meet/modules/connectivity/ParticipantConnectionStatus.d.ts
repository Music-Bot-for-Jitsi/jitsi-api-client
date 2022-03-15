import JitsiConference from '../../JitsiConference.d.ts';
import RTC from '../RTC/RTC.d.ts';
import JitsiRemoteTrack from '../RTC/JitsiRemoteTrack.d.ts';
import JitsiParticipant from '../../JitsiParticipant.d.ts';
import { VideoType } from '../../service/RTC/VideoType.d.ts';

export enum ParticipantConnectionStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  INTERRUPTED = 'interrupted',
  RESTORING = 'restoring'
}

export default class ParticipantConnectionStatusHandler {
  constructor( rtc: RTC, conference: JitsiConference, options: { rtcMuteTimeout: number, outOfLastNTimeout: number } );
  init: () => void;
  dispose: () => void;
  onEndpointConnStatusChanged: ( endpointId: string, isActive: boolean ) => void;
  clearTimeout: ( participantId: string ) => void;
  clearRtcMutedTimestamp: ( participantId: string ) => void;
  onRemoteTrackAdded: ( remoteTrack: JitsiRemoteTrack ) => void;
  onRemoteTrackRemoved: ( remoteTrack: JitsiRemoteTrack ) => void;
  isVideoTrackFrozen: ( participant: JitsiParticipant ) => boolean;
  refreshConnectionStatusForAll: () => void;
  figureOutConnectionStatus: ( id: string ) => void;
  maybeSendParticipantConnectionStatusEvent: ( id: string, nowMs: number ) => void;
  onUserLeft: ( id: string ) => void;
  onTrackRtcMuted: ( track: JitsiRemoteTrack ) => void;
  onTrackRtcUnmuted: ( track: JitsiRemoteTrack ) => void;
  onSignallingMuteChanged: ( track: JitsiRemoteTrack ) => void;
  onTrackVideoTypeChanged: ( track: JitsiRemoteTrack, type: VideoType ) => void;
}