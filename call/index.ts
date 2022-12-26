import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Call } from '../@libs/services';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  await new Call(context, req).execute();
};

export default httpTrigger;
