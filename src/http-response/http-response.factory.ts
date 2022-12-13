import { HttpResponse } from '../common/http-response.interface';

export interface HttpResponseFactory {
  data: any;
  ok: boolean;
  statusCode: number;
  statusMessage: string;

  buildHttpResponse(): HttpResponse;
}
