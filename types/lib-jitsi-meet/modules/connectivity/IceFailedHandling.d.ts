import JitsiConference from "../../JitsiConference.d.ts";

export default class IceFailedHandling {
  constructor( conference: JitsiConference );
  start: () => void;
  cancel: () => void;
}
