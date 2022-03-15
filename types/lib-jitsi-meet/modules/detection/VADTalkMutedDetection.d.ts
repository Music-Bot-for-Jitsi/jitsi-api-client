import { VADScore } from "./VADNoiseDetection.d.ts";
import EventEmitter from '../../EventEmitter.d.ts';

export default class VADTalkMutedDetection extends EventEmitter<unknown> { // TODO:
  constructor();
  changeMuteState: ( isMuted: boolean ) => void;
  isActive: () => boolean;
  processVADScore: ( vadScore: VADScore ) => void;
  reset: () => void;
}
