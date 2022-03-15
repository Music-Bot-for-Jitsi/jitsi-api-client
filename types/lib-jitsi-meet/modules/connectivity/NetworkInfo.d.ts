import Listenable from '../util/Listenable.d.ts';

export const NETWORK_INFO_EVENT: "NETWORK_INFO_CHANGED";

export class NetworkInfo extends Listenable {
  updateNetworkInfo: ( { isOnline: boolean } ) => void;
  isOnline: () => boolean;
}

declare const networkInfo: NetworkInfo;
export default networkInfo;