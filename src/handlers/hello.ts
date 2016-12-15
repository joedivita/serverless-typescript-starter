import { ICallback, IEventPayload } from '../models/LambdaEvent';

interface IQueryParams {
  foo: string;
}

interface IResponseBody {
  message: string;
}

export function hello(
  event: IEventPayload<IQueryParams>,
  context: any,
  callback: ICallback<IResponseBody>
): void {

  const response = {
    body: JSON.stringify({
      message: `Hi: ${event.queryStringParameters.foo}`,
    }),
    statusCode: 200,
  };

  callback(null, response);

}
