import RTC from './RTC.d.ts';
import JitsiTrack from './JitsiTrack.d.ts';
import JitsiRemoteTrack from './JitsiRemoteTrack.d.ts';
import JitsiLocalTrack from './JitsiLocalTrack.d.ts';
import LocalSdpMunger from '../sdp/LocalSdpMunger.d.ts';
import SdpConsistency from '../sdp/SdpConsistency.d.ts';
import RtxModifier from '../sdp/RtxModifier.d.ts';
import SignalingLayer from '../../service/RTC/SignalingLayer.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';
import { CodecMimeType } from '../../service/RTC/CodecMimeType.d.ts';
import TPCUtils from './TPCUtils.d.ts';

export default function TraceablePeerConnection( rtc: RTC, id: number, signalingLayer: unknown, iceConfig: unknown, constraints: unknown, isP2P: boolean, options: {
  disableSimulcast: boolean;
  disableRtx: boolean;
  disabledCodec: string;
  preferredCodec: string;
  startSilent: boolean;
  usesUnifiedPlan: boolean;
} ): void; // TODO:

export default class TraceablePeerConnection {
  audioTransferActive: boolean;
  videoTransferActive: boolean;
  id: number;
  isP2P: boolean;
  remoteTracks: Map<number, Map<MediaType, JitsiRemoteTrack>>; // TODO:
  localTracks: Map<number, JitsiLocalTrack>; // TODO:
  localSSRCs: Map<number, {
    /**
     * an array which holds all track's SSRCs
     */
    ssrcs: Array<number>;
    /**
     * an array stores all track's SSRC
     * groups
     */
    groups: {
      /**
       * the SSRC groups semantics
       */
      semantics: string;
      /**
       * group's SSRCs in order where the first
       * one is group's primary SSRC, the second one is secondary (RTX) and so
       * on...
       */
      ssrcs: Array<number>;
    }[];
  }>;
  localUfrag: unknown; // TODO:
  signalingLayer: SignalingLayer; // TODO:
  options: unknown; // TODO:
  peerconnection: unknown; // TODO: JSDocs refers to unknownType = unknown
  videoBitrates: unknown; // TODO:
  tpcUtils: TPCUtils;
  updateLog: Array<unknown>; // TODO:
  stats: unknown; // TODO:
  statsinterval: number;
  maxstats: unknown; // TODO:
  interop: unknown; // TODO: unknown = Interop refers to @jitsi/sdp-interop
  simulcast: unknown; // TODO: unknown = Simulcast refers to @jitsi/sdp-simulcast
  sdpConsistency: SdpConsistency; // TODO:
  localSdpMunger: LocalSdpMunger; // TODO:
  eventEmitter: unknown; // TODO:
  rtxModifier: RtxModifier; // TODO:
  senderVideoMaxHeight: unknown;
  trace: ( what: unknown, info: unknown ) => void; // TODO:
  onicecandidate: unknown; // TODO:
  onsignalingstatechange: unknown; // TODO:
  oniceconnectionstatechange: unknown; // TODO:
  onnegotiationneeded: unknown; // TODO:
  ondatachannel: unknown; // TODO:
  getConnectionState: () => string;
  isSimulcastOn: () => boolean;
  getAudioLevels: ( speakerList?: Array<unknown> ) => Map<string, number>; // TODO:
  getLocalTracks: ( mediaType: MediaType ) => JitsiLocalTrack[];
  getLocalVideoTrack: () => JitsiLocalTrack | undefined;
  hasAnyTracksOfType: ( mediaType: MediaType ) => boolean;
  getRemoteTracks: ( endpointId: string, mediaType: MediaType ) => JitsiRemoteTrack[];
  getRemoteSourceInfoByParticipant: ( id: string ) => string[]; // TODO:
  getTargetVideoBitrates: () => unknown; // TODO:
  getTrackBySSRC: ( ssrc: number ) => JitsiTrack | null;
  getSsrcByTrackId: ( id: string ) => number | null;
  removeRemoteTracks: ( owner: string ) => JitsiRemoteTrack[];
  getLocalSSRC: ( localTrack: JitsiLocalTrack ) => string;
  signalingState: unknown; // TODO:
  iceConnectionState: unknown; // TODO:
  localDescription: unknown; // TODO:
  remoteDescription: unknown; // TODO:
  containsTrack: ( track: JitsiLocalTrack | JitsiRemoteTrack ) => boolean;
  addTrack: ( track: JitsiLocalTrack, isInitiator?: boolean ) => Promise<void>;
  addTrackUnmute: ( track: JitsiLocalTrack ) => Promise<boolean>;
  getConfiguredVideoCodec: () => CodecMimeType;
  setDesktopSharingFrameRate: (maxFps: number) => void;
  setVideoCodecs: ( preferredCodec?: CodecMimeType, disabledCodec?: CodecMimeType ) => void;
  isunknownInPc: ( mediaStream: unknown ) => boolean;
  removeTrack: ( localTrack: JitsiLocalTrack ) => void;
  findSenderByKind: ( mediaType: MediaType ) => unknown | undefined; // TODO: possible bug in the JSDocs
  findReceiverForTrack: ( track: unknown ) => unknown | undefined;
  findSenderForTrack: ( track: unknown ) => unknown | undefined;
  replaceTrack: ( oldTrack: JitsiLocalTrack | null, newTrack: JitsiLocalTrack | null ) => Promise<boolean>;
  removeTrackMute: ( localTrack: JitsiLocalTrack ) => Promise<boolean>;
  createDataChannel: ( label: unknown, opts: unknown ) => unknown; // TODO:
  setLocalDescription: ( description: unknown ) => Promise<unknown>;
  setAudioTransferActive: ( active: boolean ) => boolean;
  setSenderVideoDegradationPreference: () => Promise<void>;
  setMaxBitRate: () => Promise<void>; // TODO: definite bug in the JSDocs
  setRemoteDescription: ( description: unknown ) => unknown; // TODO:
  setSenderVideoConstraint: ( frameHeight: number ) => Promise<void>;
  setVideoTransferActive: ( active: boolean ) => boolean;
  sendTones: ( tones: string, duration: number, interToneGap: number ) => void;
  generateRecvonlySsrc: () => void;
  clearRecvonlySsrc: () => void;
  close: () => void;
  createAnswer: ( constraints: unknown ) => unknown; // TODO:
  createOffer: ( constraints: unknown ) => unknown; // TODO:
  addIceCandidate: ( candidate: unknown ) => unknown; // TODO:
  generateNewStreamSSRCInfo: (track: JitsiLocalTrack) => TraceablePeerConnection['localSSRCs'];
  usesUnifiedPlan: () => boolean;
  getActiveSimulcastStreams: () => number;
  getStats: () => unknown; // TODO:
  toString: () => string;
}
