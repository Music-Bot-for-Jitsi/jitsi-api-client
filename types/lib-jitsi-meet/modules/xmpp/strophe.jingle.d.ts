import JingleSessionPC from './JingleSessionPC.d.ts';
import ConnectionPlugin from './ConnectionPlugin.d.ts';
import XMPP from './xmpp.d.ts';
import EventEmitter from '../../EventEmitter.d.ts';

declare class JingleConnectionPlugin extends ConnectionPlugin {
  constructor( xmpp: XMPP, eventEmitter: EventEmitter<unknown>, iceConfig: unknown ); // TODO:
  init: ( connection: unknown ) => void; // TODO:
  onJingle: ( iq: unknown ) => boolean; // TODO:
  newP2PJingleSession: ( me: string, peer: string ) => JingleSessionPC;
  terminate: ( sid: unknown, reasonCondition: unknown, reasonText: unknown ) => void; // TODO:
  getStunAndTurnCredentials: () => void;
  onReceiveStunAndTurnCredentials: ( res: unknown ) => boolean; // TODO:
  getLog: () => unknown; // TODO:
}
