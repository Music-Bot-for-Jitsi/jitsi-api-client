import JitsiConference from '../types/lib-jitsi-meet/JitsiConference.d.ts';
import { JitsiConferenceEvents } from '../types/lib-jitsi-meet/JitsiConferenceEvents.d.ts';
import JitsiConnection from '../types/lib-jitsi-meet/JitsiConnection.d.ts';
import { JitsiConferenceOptions } from '../types/lib-jitsi-meet/JitsiConnection.d.ts';
import { JitsiConnectionEvents } from '../types/lib-jitsi-meet/JitsiConnectionEvents.d.ts';
import { JitsiMeetJSType } from '../types/lib-jitsi-meet/JitsiMeetJS.d.ts';
import JitsiParticipant from '../types/lib-jitsi-meet/JitsiParticipant.d.ts';
import polyfills from './polyfills.ts';

type Listener = () => void;

export class JitsiClient {
  private connection: JitsiConnection;
  private conference?: JitsiConference;
  private participants: JitsiParticipant[] = [];

  private constructor(
    private instance: string,
    private conferenceName: string,
    private JitsiMeetJS: JitsiMeetJSType,
  ) {
    const options = {
      hosts: {
        domain: instance,
        muc: `conference.${instance}`,
      },
      deploymentInfo: {},
      bosh: `https://${instance}/http-bind?room=${conferenceName}`,
    };

    this.connection = new this.JitsiMeetJS.JitsiConnection(undefined, null, options);
  }

  /**
   * Helper function to update the list of participants
   */
  private updateParticipants() {
    if (this.conference) {
      this.participants = this.conference.getParticipants();
    } else {
      this.participants = [];
    }
  }

  /**
   * Called when connection fails
   */
  private onConnectionFailed() {
    throw Error('Connection failed! Please report this issue');
  }

  /**
   * Called when the connection to the Jitsi instance has been established successfully
   */
  private onConnectionSuccess() {
    console.info('Connection established successfully');
    const conferenceOptions: JitsiConferenceOptions = {
      startAudioMuted: false,
    };
    this.conference = this.connection.initJitsiConference(
      this.conferenceName.toLowerCase(),
      conferenceOptions,
    );
    const { conference: events } = this.JitsiMeetJS.events;
    // ToDo: Fix hardcoded display name
    this.conference.setDisplayName('DJ Jimmi');
    this.addConferenceEventListener(events.CONFERENCE_JOINED, this.onConferenceJoined);
    this.addConferenceEventListener(events.USER_JOINED, this.updateParticipants);
    this.addConferenceEventListener(events.USER_LEFT, this.updateParticipants);
    this.addConferenceEventListener(events.DISPLAY_NAME_CHANGED, this.updateParticipants);
    // ToDo: Implement Password authentication
    this.conference.join('');
  }

  /**
   * Called when conference is joined successfully
   */
  private onConferenceJoined() {
    console.info('Successfully joined conference!');
  }

  /**
   * This function is called when the JitsiClient disconnects.
   */
  private onDisconnect() {
    console.info('disconnecting!');
    const { connection: events } = this.JitsiMeetJS.events;
    this.removeConnectionEventListener(events.CONNECTION_ESTABLISHED, this.onConnectionSuccess);
    this.removeConnectionEventListener(events.CONNECTION_FAILED, this.onConnectionFailed);
    this.removeConnectionEventListener(events.CONNECTION_DISCONNECTED, this.onDisconnect);
  }

  /**
   * Add an event listener to the jitsi connection
   *
   * @param event - The connection event
   * @param listener - The listener function
   */
  addConnectionEventListener(event: JitsiConnectionEvents, listener: Listener): void {
    this.connection.addEventListener(event, listener.bind(this));
  }

  /**
   * Remove a listener from the jitsi connection
   *
   * @param event - The connection event
   * @param listener - The listener function
   */
  removeConnectionEventListener(event: JitsiConnectionEvents, listener: Listener): void {
    this.connection.removeEventListener(event, listener.bind(this));
  }

  /**
   * Add an event listener to the jitsi conference
   *
   * @param event - The conference event
   * @param listener - The listener function
   *
   * @throws {Error}
   * Thrown if the conference is not initialized
   */
  addConferenceEventListener(event: JitsiConferenceEvents, listener: Listener): void {
    if (!this.conference) throw Error('Conference not initialized');
    this.conference.on(event, listener.bind(this));
  }

  /**
   * Remove a listener from the jitsi conference
   *
   * @param event - The conference event
   * @param listener - The listener function
   *
   * @throws {Error}
   * Thrown if the conference is not initialized
   */
     removeConferenceEventListener(event: JitsiConferenceEvents, listener: Listener): void {
      if (!this.conference) throw Error('Conference not initialized');
      this.conference.removeEventListener(event, listener.bind(this));
    }

  /**
   * Establish the initial connection to the given JitsiInstance.
   */
  connect(): void {
    this.JitsiMeetJS.init({});
    const { connection: events } = this.JitsiMeetJS.events;
    this.addConnectionEventListener(events.CONNECTION_ESTABLISHED, this.onConnectionSuccess);
    this.addConnectionEventListener(events.CONNECTION_FAILED, this.onConnectionFailed);
    this.addConnectionEventListener(events.CONNECTION_DISCONNECTED, this.onDisconnect);
    this.connection.connect({});
  }

  /**
   * Create a new JitsiClient and join the given conference
   *
   * @param instance - The domain of the instance to join
   * @param conferenceName - The name of the conference to join
   * @returns The JitsiClient object
   */
  static async join(instance: string, conferenceName: string): Promise<JitsiClient> {
    const jitsiApi = await polyfills.init(instance);
    const client = new JitsiClient(instance, conferenceName, jitsiApi);
    client.connect();
    return client;
  }
}
