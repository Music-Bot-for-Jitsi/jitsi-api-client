import Listenable from '../util/Listenable.d.ts';
import JitsiLocalTrack from './JitsiLocalTrack.d.ts';
import JitsiRemoteTrack from './JitsiRemoteTrack.d.ts';
import TraceablePeerConnection from './TraceablePeerConnection.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';
import SignalingLayer from '../../service/RTC/SignalingLayer.d.ts';

export default class RTC extends Listenable {
  destroy: () => void;
  static createLocalTracks: ( tracksInfo: unknown[] ) => JitsiLocalTrack[]; // TODO:
  static obtainAudioAndVideoPermissions: ( options: { devices: unknown[], resolution: string, cameraDeviceId: string, micDeviceId: string } ) => Promise<unknown>; // TODO:
  initializeBridgeChannel: ( perrconnection: unknown, wsUrl: string ) => void;
  onCallEnded: () => void;
  setDesktopSharingFrameRate: (maxFps: number) => void;
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  selectEndpoints: ( ids: string[] ) => void;
  static addListener: ( eventType: string, listener: unknown ) => void; // TODO: this should be typed to an enum of eventTypes with appropriate definition for the listeners
  static removeListener: ( eventType: string, listener: unknown ) => void; // TODO: this should be typed to an enum of eventTypes with appropriate definition for the listeners
  static init: ( options: unknown ) => unknown; // TODO:
  createPeerConnection: ( signalling: SignalingLayer, iceConfig: unknown, isP2P: boolean, options: { enableInsertableStreams: boolean, disableSimulcast: boolean, disableRtx: boolean, startSilent: boolean } ) => TraceablePeerConnection; // TODO:
  addLocalTrack: ( track: unknown ) => void; // TODO:
  getLocalVideoTrack: () => JitsiLocalTrack | undefined;
  getLocalAudioTrack: () => JitsiLocalTrack | undefined;
  getLocalEndpointId: () => string;
  getLocalTracks: ( mediaType: MediaType ) => JitsiLocalTrack[];
  getRemoteTracks: ( mediaType: MediaType ) => JitsiRemoteTrack[];
  setAudioMute: ( value: unknown ) => Promise<unknown>; // TODO:
  removeLocalTrack: ( track: unknown ) => void; // TODO:
  static attachunknown: ( elSelector: unknown, stream: unknown ) => unknown; // TODO:
  static getStreamID: ( stream: unknown ) => unknown; // TODO:
  static getTrackID: ( track: unknown ) => unknown; // TODO:
  static isDeviceListAvailable: () => unknown; // TODO:
  static isDeviceChangeAvailable: ( deviceType: string ) => boolean; // TODO: check if deviceType should be an enum
  static isWebRtcSupported: () => boolean;
  static getAudioOutputDevice: () => string;
  static getCurrentlyAvailableMediaDevices: () => unknown[]; // TODO:
  static getEventDataForActiveDevice: () => unknown;
  static setAudioOutputDevice: ( deviceId: string ) => Promise<unknown>; // TODO:
  static isUserStream: ( stream: unknown ) => boolean;
  static isUserStreamById: ( streamId: string ) => boolean;
  static enumerateDevices: ( callback: () => unknown ) => void; // TODO:
  static stopunknown: ( mediaStream: unknown ) => void;
  static isDesktopSharingEnabled: () => boolean;
  closeBridgeChannel: () => void;
  setAudioLevel: ( tpc: TraceablePeerConnection, ssrc: number, audioLevel: number, isLocal: boolean ) => void;
  sendChannelMessage: ( to: string, payload: unknown ) => void; // TODO:
  setLastN: ( value: number ) => void;
  isInLastN: ( id: string ) => boolean;
  isInForwardedSources: ( sourceName: string ) => boolean;
  setNewReceiverVideoConstraints: ( constraints: unknown ) => void; // TODO:
  setVideoType: ( videoType: string ) => void;
  setVideoMute: ( value: unknown ) => Promise<unknown>; // TODO:
  arePermissionsGrantedForAvailableDevices: () => boolean;
  sendEndpointStatsMessage: ( payload: unknown ) => void; // TODO:
}
