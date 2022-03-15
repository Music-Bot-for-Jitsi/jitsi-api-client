import JitsiConference from '../../JitsiConference.d.ts';
import { CodecMimeType } from '../../service/RTC/CodecMimeType.d.ts';

export class CodecSelection {
  constructor( conference: JitsiConference, options: { disabledCodec: string, enforcePreferredCodec: boolean, jvbCodec: string, p2pCodec: string } );  // TODO:
  getPreferredCodec: () => CodecMimeType;
}
