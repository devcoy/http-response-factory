interface HttpBase {
  ok: boolean;
  statusCode: number;
  statusMessage: string;
}

export interface HttpResponse extends HttpBase {
  data: any;
}

export interface HttpException extends HttpBase {
  errors: any;
}
