import JitsiLocalTrack from './JitsiLocalTrack.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';

export const SIM_LAYER_RIDS: string[];

export default class TPCUtils {
  constructor(peerconnection: unknown, videoBitrates: unknown); // TODO:
  ensureCorrectOrderOfSsrcs: ( description: unknown ) => unknown; // TODO:
  insertUnifiedPlanSimulcastReceive: ( desc: { type: string, sdp: string } ) => unknown;
  addTrack: ( localTrack: JitsiLocalTrack, isInitiator: boolean ) => void;
  addTrackUnmute: ( localTrack: JitsiLocalTrack ) => Promise<void>;
  getLocalStreamHeightConstraints: ( localTrack: JitsiLocalTrack ) => number[];
  removeTrackMute: ( localTrack: JitsiLocalTrack ) => Promise<void>;
  replaceTrack: ( oldTrack: JitsiLocalTrack, newTrack: JitsiLocalTrack ) => Promise<void>;
  setAudioTransferActive: ( active: boolean ) => void;
  setEncodings: ( track: JitsiLocalTrack ) => Promise<void>;
  setMediaTransferActive: ( mediaType: MediaType, active: boolean ) => void;
  setVideoTransferActive: ( active: boolean ) => void;
  updateEncodingsResolution: ( parameters: unknown ) => void;
}
