import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Response } from '../@libs/common';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const version = 'mock-version'
  new Response(context).ok(version);
};

export default httpTrigger;
