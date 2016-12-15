export interface IResponsePayload<ResponseBody> {
  statusCode: number;
  body: string;
}

export interface IEventPayload<QueryParams> {
  httpMethod: string;
  queryStringParameters: QueryParams;
}

export interface ICallback<ResponseBody> {
  (error: any, result: IResponsePayload<ResponseBody>): void;
}
