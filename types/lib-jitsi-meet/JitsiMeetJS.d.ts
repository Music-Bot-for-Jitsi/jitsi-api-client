import Logger from '../jitsi-meet-logger/Logger.d.ts';
import JitsiConnection from './JitsiConnection.d.ts';
import JitsiMediaDevices from './JitsiMediaDevices.d.ts';
import { JitsiConferenceErrors } from './JitsiConferenceErrors.d.ts';
import { JitsiConnectionErrors } from './JitsiConnectionErrors.d.ts';
import { JitsiTrackErrors } from './JitsiTrackErrors.d.ts';
import { JitsiLogLevels } from './JitsiLogLevels.d.ts';
import { JitsiMediaDevicesEvents } from './JitsiMediaDevicesEvents.d.ts';
import { JitsiTrackEvents } from './JitsiTrackEvents.d.ts';
import { JitsiConnectionEvents } from './JitsiConnectionEvents.d.ts';
import { JitsiConferenceEvents } from './JitsiConferenceEvents.d.ts';
import { JitsiTranscriptionStatus } from './JitsiTranscriptionStatus.d.ts';
import BrowserCapabilities from './modules/browser/BrowserCapabilities.d.ts';
import { ParticipantConnectionStatus } from './modules/connectivity/ParticipantConnectionStatus.d.ts';
import { DetectionEvents } from './modules/detection/DetectionEvents.d.ts';
import TrackVADEmitter, { VADProcessor } from './modules/detection/TrackVADEmitter.d.ts';
import RecordingConstants from './modules/recording/recordingConstants.d.ts';
import JitsiLocalTrack from './modules/RTC/JitsiLocalTrack.d.ts';
import PrecallTest from './modules/statistics/PrecallTest.d.ts';
import AuthUtil from './modules/util/AuthUtil.d.ts';
import ScriptUtil from './modules/util/ScriptUtil.d.ts';
import { VideoSIPGWConstants } from './modules/videosipgw/VideoSIPGWConstants.d.ts';
import AudioMixer from './modules/webaudio/AudioMixer.d.ts';
import { ConnectionQualityEvents } from './service/connectivity/ConnectionQualityEvents.d.ts';
import { E2ePingEvents } from './service/e2eping/E2ePingEvents.d.ts';

export type CreateLocalTracksOptions = {
  effects?: Array<unknown>; // TODO: work out what unknown is
  devices?: Array<string>;
  resolution?: string;
  cameraDeviceId?: string;
  micDeviceId?: string;
  interval?: number;
  checkAgain?: () => boolean;
  listener?: () => void;
  frameRate?: {
    min?: string,
    max?: string,
  },
  desktopSharingFrameRate?: {
    min?: string,
    max?: string,
  },
  constraints?: any // TODO: figure out this type
}

export type InitOptions = {
  disableAudioLevels?: boolean,
  useIPv6?: unknown,
  disableSimulcast?: unknown,
  enableWindowOnErrorHandler?: unknown,
  disableThirdPartyRequests?: unknown,
  enableAnalyticsLogging?: unknown,
  externalStorage?: unknown,
  callStatsCustomScriptUrl?: unknown,
  disableRtx?: unknown,
  disabledCodec?: unknown,
  preferredCodec?: unknown,
  useTurnUdp?: unknown
}

export type JitsiMeetJSType = {
  version: string;

  JitsiConnection: typeof JitsiConnection;

  ProxyConnectionService: unknown; // TODO:

  //USER_MEDIA_SLOW_PROMISE_TIMEOUT: 1000;

  constants: {
    participantConnectionStatus: typeof ParticipantConnectionStatus,
    recording: typeof RecordingConstants,
    sipVideoGW: typeof VideoSIPGWConstants,
    transcriptionStatus: typeof JitsiTranscriptionStatus,
  };

  events: {
    conference: typeof JitsiConferenceEvents,
    connection: typeof JitsiConnectionEvents,
    detection: typeof DetectionEvents,
    track: typeof JitsiTrackEvents,
    mediaDevices: typeof JitsiMediaDevicesEvents,
    connectionQuality: typeof ConnectionQualityEvents,
    e2eping: typeof E2ePingEvents
  };

  errors: {
    conference: typeof JitsiConferenceErrors,
    connection: typeof JitsiConnectionErrors,
    track: typeof JitsiTrackErrors
  };

  errorTypes: {
    JitsiTrackError: unknown // TODO:
  };

  logLevels: typeof JitsiLogLevels; // TODO: code refers to Logger.levels and that is in ../jitsi-meet-logger/Logger.d.ts

  mediaDevices: typeof JitsiMediaDevices;

  analytics: unknown; // TODO: code referes to Statistics.analytics which comes from modules/statstics/AnalyticsAdapter.js

  init: ( options: InitOptions ) => unknown; // TODO:

  isDesktopSharingEnabled: () => boolean;

  isWebRtcSupported: () => boolean;

  setLogLevel: ( level: Logger.levels ) => void;

  setLogLevelById: ( level: Logger.levels, id: unknown ) => void; // TODO:

  addGlobalLogTransport: ( globalTransport: unknown ) => void; // TODO:

  removeGlobalLogTransport: ( globalTransport: unknown ) => void; // TODO:

  setGlobalLogOptions: ( options: unknown ) => void; // TODO:

  createLocalTracks: ( options: CreateLocalTracksOptions, firePermissionPromptIsShownEvent?: boolean, originalOptions?: CreateLocalTracksOptions ) => Promise<Array<JitsiLocalTrack> | JitsiConferenceErrors>; // TODO:

  createTrackVADEmitter: ( localAudioDeviceId: string, sampleRate: 256 | 512 | 1024 | 4096 | 8192 | 16384, vadProcessor: VADProcessor ) => Promise<TrackVADEmitter>;

  createAudioMixer: () => AudioMixer;

  getActiveAudioDevice: () => Promise<Object>; // TODO: can we improve on object?

  // isDeviceListAvailable: () => boolean; // obsosete

  // isDeviceChangeAvailable: ( deviceType: string ) => boolean; // obsosete

  isMultipleAudioInputSupported: () => boolean;

  isCollectingLocalStats: () => boolean;

  enumerateDevices: ( callback: ( availableDevices: any[] ) => void ) => void;

  getGlobalOnErrorHandler: ( message: string, source: string, lineno?: number, colno?: number, error?: Error ) => void;

  setNetworkInfo: (info: { isOnline: boolean } ) => void;

  setVideoTrackContentHints: ( track: any, hint: string ) => void;

  precallTest: PrecallTest;

  util: {
    AuthUtil: { getTokenAuthUrl: typeof AuthUtil.getTokenAuthUrl },
    ScriptUtil: { loadScript: typeof ScriptUtil.loadScript },
    browser: BrowserCapabilities
  }
}

declare var _default: JitsiMeetJSType;
export default _default;
