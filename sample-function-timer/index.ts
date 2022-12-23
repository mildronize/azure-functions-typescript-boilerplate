import { AzureFunction, Context, Timer } from '@azure/functions';
import { SampleFunctionTimer } from '../libs/functions/sample-function-timer';

const httpTrigger: AzureFunction = async function (context: Context, myTimer: Timer): Promise<void> {
  context.log('Node timer trigger function ran!', new Date().toISOString());
  await new SampleFunctionTimer(context).execute();
};

export default httpTrigger;
