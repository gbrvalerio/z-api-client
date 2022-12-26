export interface ZAPIRequest {}
export interface ZAPIPutRequest extends ZAPIRequest {}
export interface ZAPIPostRequest extends ZAPIRequest {}
export interface ZAPIGetRequest extends ZAPIRequest {}

export interface ZAPIResponse {}

export interface ZAPIRequestParams {}

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
