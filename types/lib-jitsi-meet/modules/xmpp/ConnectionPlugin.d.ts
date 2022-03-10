import Listenable from '../util/Listenable.d.ts';

export default class ConnectionPluginListenable extends Listenable {
  constructor( ...args: unknown[] ); // TODO:
  init: ( connection: unknown ) => void;
}

export function getConnectionPluginDefinition<T>( base: T ): T | ConnectionPluginListenable; // TODO:
