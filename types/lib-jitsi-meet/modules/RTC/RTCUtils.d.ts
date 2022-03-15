import Listenable from '../util/Listenable.d.ts';
import { MediaType } from '../../service/RTC/MediaType.d.ts';

declare class RTCUtils extends Listenable {
  init: ( options: unknown ) => void; // TODO:
  getUserMediaWithConstraints: ( um: MediaType[], options: { resolution: string, bandwidth: number, fps: number, desktopStream: string, cameraDeviceId: string, micDeviceId: string, frameRate: { min: unknown, max: unknown }, screenShareAudio: boolean, timeout: number } ) => Promise<unknown>; // TODO:
  obtainAudioAndVideoPermissions: ( options: { devices: unknown[], resolution: string, cameraDeviceId: string, micDeviceId: string, desktopSharingFrameRate: { min: unknown, max: unknown } } ) => Promise<unknown>; // TODO:
  isDeviceListAvailable: () => boolean;
  isDeviceChangeAvailable: ( deviceType: string ) => boolean;
  stopunknown: ( mediaStream: unknown ) => void;
  isDesktopSharingEnabled: () => boolean;
  setAudioOutputDevice: ( deviceId: string ) => Promise<unknown>; // TODO:
  setDesktopSharingFrameRate: (maxFps: number) => void;
  getAudioOutputDevice: () => string;
  getCurrentlyAvailableMediaDevices: () => unknown[]; // TODO:
  getEventDataForActiveDevice: ( device: unknown ) => unknown; // TODO:
  setSuspendVideo: ( constraints: unknown, enable: boolean ) => void; // TODO:
  arePermissionsGrantedForAvailableDevices: () => boolean;
}

declare const rtcUtils: RTCUtils;
export default rtcUtils;
