import { ParamsDisconnectInstance, ParamsInstanceStatus, ParamsRestartInstance, ParamsRestoreSession, RequestProfilePicture, RequestUpdateAutoReadMessage, RequestUpdateCallRejectAuto, RequestUpdateCallRejectMessage, ResponseDisconnectInstance, ResponseInstanceStatus, ResponseProfilePicture, ResponseRestartInstance, ResponseRestoreSession, ResponseUpdateAutoReadMessage, ResponseUpdateCallRejectAuto, ResponseUpdateCallRejectMessage } from "../types/instance";
import ZAPIClient from "../client";

export default class ZAPIInstanceClient {

  private client: ZAPIClient;

  constructor(client: ZAPIClient) {
    this.client = client;
  }

  /**
   * https://developer.z-api.io/instance/update-auto-read-message
   */
  async updateAutoReadMessage(autoRead: boolean): Promise<ResponseUpdateAutoReadMessage> {
    const result = await this.client.put<RequestUpdateAutoReadMessage, ResponseUpdateAutoReadMessage>('update-auto-read-message', { value: autoRead });
    return result;
  }
  
  /**
   * https://developer.z-api.io/instance/profile-picture
   */
  async updateProfilePicture(profilePictureUrl: string): Promise<ResponseProfilePicture> {
    const result = await this.client.put<RequestProfilePicture, ResponseProfilePicture>('profile-picture', { value: profilePictureUrl });
    return result;
  }

  /**
   * https://developer.z-api.io/instance/update-call-reject-auto
   */
  async updateCallRejectAuto(autoReject: boolean): Promise<ResponseUpdateCallRejectAuto> {
    const result = await this.client.put<RequestUpdateCallRejectAuto, ResponseUpdateCallRejectAuto>('update-call-reject-auto', { value: autoReject });
    return result;
  }

  /**
   * https://developer.z-api.io/instance/update-call-reject-message
   */
  async updateCallRejectMessage(message: string): Promise<ResponseUpdateCallRejectMessage> {
    const result = await this.client.put<RequestUpdateCallRejectMessage, ResponseUpdateCallRejectMessage>('update-call-reject-auto', { value: message });
    return result;
  }

  /**
   * https://developer.z-api.io/instance/restore-session
   */
  async restoreSession(): Promise<ResponseRestoreSession> {
    const result = await this.client.get<ParamsRestoreSession, ResponseRestoreSession>('restore-session');
    return result;
  }

  /**
   * https://developer.z-api.io/instance/disconnect
   */
  async disconnectSession(): Promise<ResponseDisconnectInstance> {
    const result = await this.client.get<ParamsDisconnectInstance, ResponseDisconnectInstance>('disconnect');
    return result;
  }

  /**
   * https://developer.z-api.io/instance/restart
   */
  async restartInstance(): Promise<ResponseRestartInstance> {
    const result = await this.client.get<ParamsRestartInstance, ResponseRestartInstance>('restart');
    return result;
  }

  /**
   * https://developer.z-api.io/instance/status
   */
  async instanceStatus(): Promise<ResponseInstanceStatus> {
    const result = await this.client.get<ParamsInstanceStatus, ResponseInstanceStatus>('status');
    return result;
  }

}