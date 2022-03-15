import { VADProcessor } from "./TrackVADEmitter.d.ts";
import JitsiConference from '../../JitsiConference.d.ts';
import EventEmitter from '../../EventEmitter.d.ts';

export default class VADAudioAnalyser extends EventEmitter<unknown> { // TODO:
  constructor( conference: JitsiConference, createVADProcessor: () => VADProcessor );
  addVADDetectionService: ( vadService: unknown ) => void;
}
