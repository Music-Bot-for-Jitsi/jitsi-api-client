import { MLineWrap } from './SdpTransformUtil.d.ts';

export default class RtxModifier {
  clearSsrcCache: () => void;
  setSsrcCache: ( ssrcMapping: Map<unknown, unknown> ) => void; // TODO:
  modifyRtxSsrcs: ( sdpStr: string ) => void;
  modifyRtxSsrcs2: ( videoMLine: MLineWrap ) => boolean; // TODO: what is an MLineWrap
  stripRtx: ( sdpStr: string ) => string;
}
