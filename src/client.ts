import { ZAPIPostRequest, ZAPIPutRequest, ZAPIRequestParams, ZAPIResponse } from "endpoints";
import { ZAPIInstanceClient } from "./clients";

export default class ZAPIClient {

  private instanceId: string;
  private token: string;

  instance: ZAPIInstanceClient;

  constructor(instanceId: string, token: string) {
    this.instanceId = instanceId;
    this.token = token;
    this.instance = new ZAPIInstanceClient(this);
  }

  private makeUrl(endpoint: string): string {
    return `https://api.z-api.io/instances/${this.instanceId}/token/${this.token}/${endpoint}`;
  }

  async post<Request extends ZAPIPostRequest, Response extends ZAPIResponse>(endpoint: string, body: Request): Promise<Response> {
    const result = await fetch(this.makeUrl(endpoint), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await result.json() as Response;
    return response;
  }

  async put<Request extends ZAPIPutRequest, Response extends ZAPIResponse>(endpoint: string, body: Request): Promise<Response> {
    const result = await fetch(this.makeUrl(endpoint), {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = await result.json() as Response;
    return response;
  }

  async get<Params extends ZAPIRequestParams, Response extends ZAPIResponse>(endpoint: string, params?: Params): Promise<Response> {
    const url = new URL(this.makeUrl(endpoint));
    if(params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    }
    const result = await fetch(url);
    const response = await result.json() as Response;
    return response;
  }

  async delete<Params extends ZAPIRequestParams, Response extends ZAPIResponse>(endpoint: string, params: Params): Promise<Response> {
    const url = new URL(this.makeUrl(endpoint));
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    const result = await fetch(url, { method: 'DELETE' });
    const response = await result.json() as Response;
    return response;
  }

}
