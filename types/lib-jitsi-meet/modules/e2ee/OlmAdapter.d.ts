import JitsiConference from '../../JitsiConference.d.ts';
import Listenable from '../util/Listenable.d.ts';

export class OlmAdapter extends Listenable {
  constructor( conference: JitsiConference );
  initSessions: () => Promise<unknown>; // TODO:
  static isSupported: () => boolean;
  updateCurrentKey: ( key: Uint8Array | boolean ) => number;
  clearParticipantSession: ( participant: unknown ) => void; // TODO:
  clearAllParticipantsSessions: () => void;
  updateKey: ( key: Uint8Array | boolean ) => Promise<number>;
}
