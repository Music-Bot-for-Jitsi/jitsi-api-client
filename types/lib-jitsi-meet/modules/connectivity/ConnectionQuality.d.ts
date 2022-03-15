import JitsiConference from '../../JitsiConference.d.ts';
import EventEmitter from '../../EventEmitter.d.ts';
import { ConnectionQualityEvents } from '../../service/connectivity/ConnectionQualityEvents.d.ts';

export default class ConnectionQuality {
  constructor( conference: JitsiConference, eventEmitter: EventEmitter<ConnectionQualityEvents>, options: { config: { startBitrate: number; } } );
  getTarget: ( simulcast: boolean, resolution: Resolution, millisSinceStart: number, videoQualitySettings: unknown ) => number; // TODO:
  getStats: () => unknown; // TODO:
}
