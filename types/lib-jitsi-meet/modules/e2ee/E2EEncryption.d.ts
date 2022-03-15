import JitsiConference from '../../JitsiConference.d.ts';

declare class E2EEncryption {
  constructor( conference: JitsiConference );
  static isSupported: ( config: { testing: { disableE2EE: boolean } } ) => boolean;
  isEnabled: () => boolean;
  setEnabled: ( enabled: boolean ) => Promise<void>;
}
