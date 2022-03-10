import JitsiConference from '../../JitsiConference.d.ts';
import JitsiTrack from '../RTC/JitsiTrack.d.ts';

export class AudioRecorder {
  constructor( jitsiConference: JitsiConference );
  determineCorrectFileType: unknown; // TODO:
  addTrack: ( track: JitsiTrack ) => void;
  instantiateTrackRecorder: ( track: JitsiTrack ) => void;
  removeTrack: ( track: JitsiTrack ) => void;
  updateNames: () => void;
  start: () => void;
  stop: () => void;
  download: () => void;
  getRecordingResults: () => Array<unknown>; // TODO:
  getFileType: () => string;
}
