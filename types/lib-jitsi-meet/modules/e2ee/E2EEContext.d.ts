export default class E2EEcontext {
  constructor();
  cleanup: ( participantId: string ) => void;
  handleReceiver: ( receiver: unknown, kind: string, participantId: string ) => void;
  handleSender: ( sender: unknown, kind: string, participantId: string ) => void;
  setKey: ( participantId: string, key: Uint8Array[] | boolean, keyIndex: number ) => void;
}
