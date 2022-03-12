import { VADProcessor } from "./TrackVADEmitter.d.ts";
import EventEmitter from '../../EventEmitter.d.ts';

export default class VADReportingService extends EventEmitter<unknown> { // TODO:
  constructor( intervalDelay: number );
  static create: ( micDeviceList: unknown[], intervalDelay: number, createVADProcessor: () => VADProcessor ) => Promise<VADReportingService>;
  destroy: () => void;
}
