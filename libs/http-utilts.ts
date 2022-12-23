import { Context } from '@azure/functions';
import { StatusCodes } from 'http-status-codes';

export class Response {
  constructor(private context: Context) {}

  public send<T>(statusCode: StatusCodes | number | undefined, body: T) {
    this.context.res = {
      status: statusCode? statusCode: StatusCodes.OK,
      body,
    };
    StatusCodes.OK;
  }

  public ok<T>(body: T) {
    this.send(StatusCodes.OK, body);
  }
}
