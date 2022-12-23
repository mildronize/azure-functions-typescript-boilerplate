import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { SampleFunctionTimer } from '../libs/functions/sample-function-timer';
import { Response } from '../libs/http-utilts';
import { ICallableFunction } from '../libs/utils';
import { z } from 'zod';
import { functionEnvSchema } from '../libs/functions/call/environment-schema';
import { parseEnv } from '../libs/environments/environment';
import { StatusCodes } from 'http-status-codes';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  context.log('HTTP trigger function processed a request.');

  // Input
  const functionName = req.query.function;
  console.log(process.env)
  const env = parseEnv(functionEnvSchema, process.env as Record<string, string>);

  if (env.Call__IsEnable === false) {
    new Response(context).send(StatusCodes.METHOD_NOT_ALLOWED, 'This function is disabled!');
    return;
  }

  const CallableFunctionsSchema = z.literal('SampleFunctionTimer');

  type CallableFunctions = z.infer<typeof CallableFunctionsSchema>;

  const isCallableFunction = (functionName: string): functionName is CallableFunctions => {
    const result = CallableFunctionsSchema.safeParse(functionName);
    return result.success === true;
  };

  const Function: Record<CallableFunctions, ICallableFunction> = {
    SampleFunctionTimer: new SampleFunctionTimer(context),
  };

  if (!functionName) {
    new Response(context).ok('Please provide the function name via /api/Call?function=[Function Name]');
    return;
  }

  if (isCallableFunction(functionName)) {
    context.log(`Executing... the function name '${functionName}'`);
    await Function[functionName].execute();
    new Response(context).ok(`The function name '${functionName}' is executed complete!`);
  } else {
    new Response(context).ok(`The function name '${functionName}' is not found `);
  }
};

export default httpTrigger;
