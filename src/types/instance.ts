import { ZAPIGetParams, ZAPIPutRequest, ZAPIResponse } from "endpoints";

/**
 * https://developer.z-api.io/instance/update-auto-read-message
 */
export interface RequestUpdateAutoReadMessage extends ZAPIPutRequest {
  /**
   * true for auto read, false for not
   */
  value: boolean;
}

export interface ResponseUpdateAutoReadMessage extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/profile-picture
 */
export interface RequestProfilePicture extends ZAPIPutRequest {
  /**
   * The new profile picture url
   */
  value: string;
}

export interface ResponseProfilePicture extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/update-call-reject-auto
 */
export interface RequestUpdateCallRejectAuto extends ZAPIPutRequest {
  /**
   * true for auto reject received calls, false for not
   */
  value: boolean;
}

export interface ResponseUpdateCallRejectAuto extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/update-call-reject-message
 */
export interface RequestUpdateCallRejectMessage extends ZAPIPutRequest {
  /**
   * the message automatically sent whenever your instance automatically rejects a call
   */
  value: string;
}

export interface ResponseUpdateCallRejectMessage extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/restore-session
 */
export type ParamsRestoreSession = ZAPIGetParams

export interface ResponseRestoreSession extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/restart
 */
export type ParamsRestartInstance = ZAPIGetParams

export interface ResponseRestartInstance extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/restart
 */
export type ParamsDisconnectInstance = ZAPIGetParams

export interface ResponseDisconnectInstance extends ZAPIResponse {
  /**
   * whether it was successful or not
   */
  value: boolean;
}

/**
 * https://developer.z-api.io/instance/restart
 */
export type ParamsInstanceStatus = ZAPIGetParams

export interface ResponseInstanceStatus extends ZAPIResponse {
  /**
   * if the instance is connected to a number
   */
  connected: boolean;
  /**
   * indicates whether the smartphone is connected to internet or not
   */
  smartphoneConnected: boolean;
  /**
   * possible error if connected === false
  */
  error?: string;
}