import ZAPIClient from "../client";
import { SendTextRequest, SendTextResponse } from "messages";

export default class ZAPIMessagesClient {

  private client: ZAPIClient;

  constructor(client: ZAPIClient) {
    this.client = client;
  }

  /**
   * https://developer.z-api.io/message/send-message-text
   */
  async sendText(options: SendTextRequest): Promise<SendTextResponse> {
    const result = await this.client.post<SendTextRequest, SendTextResponse>('send-text', options);
    return result;
  }
  
}