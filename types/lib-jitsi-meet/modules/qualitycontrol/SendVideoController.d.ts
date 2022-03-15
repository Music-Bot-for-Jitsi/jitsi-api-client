import JitsiConference from '../../JitsiConference.d.ts';
import RTC from '../RTC/RTC.d.ts';

export class SendVideoController {
  constructor( conference: JitsiConference, rtc: RTC );
  selectSendMaxFrameHeight: () => number | undefined;
  setPreferredSendMaxFrameHeight: ( maxFrameHeight: number ) => Promise<void[]>;
}
