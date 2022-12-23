import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Response } from '../libs/http-utilts';
import metadata from './metadata.json';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  new Response(context).ok(metadata.version);
};

export default httpTrigger;
