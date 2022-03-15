import XmppConnection from './XmppConnection.d.ts';

export default class LastRequestTracker {
  constructor();
  startTracking: ( xmppConnection: XmppConnection, stropheConnection: unknown ) => void; // TODO:
  getLastFailedMessage: () => string | null;
}
