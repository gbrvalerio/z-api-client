import { ZAPIPutRequest, ZAPIResponse } from "endpoints";

/**
 * https://developer.z-api.io/instance/update-auto-read-message
 */
export interface SendTextRequest extends ZAPIPutRequest {
  /**
   * DDI + DDD
   * only numbers
   * example: 551199999999
   */
  phone: string;
  message: string;
  /**
   * from 1-15
   * default is 1~3
   */
  delayMessage?: number;
  /**
   * from 1-15
   * default is 0
   */
  delayTyping?: number;
}

export interface SendTextResponse extends ZAPIResponse {
  zaapId: string;
  messageId: string;
  id: string;
}