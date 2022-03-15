import ConnectionPlugin from './ConnectionPlugin.d.ts';

declare class RayoConnectionPlugin extends ConnectionPlugin {
  init: ( connection: unknown ) => void; // TODO:
  onRayo: ( iq: unknown ) => void; // TODO:
  dial: ( to: unknown, from: unknown, roomName: unknown, roomPass: unknown, focusMucJid: unknown ) => Promise<unknown>; // TODO:
  hangup: () => Promise<unknown>;
}
