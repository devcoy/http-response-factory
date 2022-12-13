import { StatusMessagesDefault } from '../../common/http-messages-default';
import { HttpResponse } from '../../common/http-response.interface';
import { HttpResponseFactory } from '../http-response.factory';

export default class ReadHttpResponse implements HttpResponseFactory {
  data: any;
  ok: boolean;
  statusCode: number;
  statusMessage: string;

  constructor(data: any, customMessage?: string) {
    this.data = data;
    this.ok = true;
    this.statusCode = 200;
    this.statusMessage = customMessage || StatusMessagesDefault.READ;
    this.buildHttpResponse();
  }

  buildHttpResponse(): HttpResponse {
    return {
      data: this.data,
      ok: this.ok,
      statusCode: this.statusCode,
      statusMessage: this.statusMessage,
    };
  }
}
