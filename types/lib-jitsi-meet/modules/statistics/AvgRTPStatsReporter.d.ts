import JitsiConference from '../../JitsiConference.d.ts';

export default class AvgRTPStatsReporter {
  constructor( conference: JitsiConference, n: number );
  dispose: () => void;
}
