import { Context, HttpRequest } from '@azure/functions';
import { Response, parseEnv, ICallableFunction } from '../../common';
import { StatusCodes } from 'http-status-codes';
import { functionEnvSchema } from './environment-schema';
import { z } from 'zod';

import { SampleFunctionTimer } from '..';

export class Call extends ICallableFunction<void> {
  constructor(private context: Context, protected req: HttpRequest) {
    super(context);
  }

  public override async execute(): Promise<void> {
    // Input
    const functionName = this.req.query.function;
    console.log(process.env);
    const env = parseEnv(functionEnvSchema, process.env as Record<string, string>);

    if (env.Call__IsEnable === false) {
      new Response(this.context).send(StatusCodes.METHOD_NOT_ALLOWED, 'This function is disabled!');
      return;
    }

    const CallableFunctionsSchema = z.literal('SampleFunctionTimer');

    type CallableFunctions = z.infer<typeof CallableFunctionsSchema>;

    const isCallableFunction = (functionName: string): functionName is CallableFunctions => {
      const result = CallableFunctionsSchema.safeParse(functionName);
      return result.success === true;
    };

    const Function: Record<CallableFunctions, ICallableFunction<any>> = {
      SampleFunctionTimer: new SampleFunctionTimer(this.context),
    };

    if (!functionName) {
      new Response(this.context).ok('Please provide the function name via /api/Call?function=[Function Name]');
      return;
    }

    if (isCallableFunction(functionName)) {
      this.context.log(`Executing... the function name '${functionName}'`);
      await Function[functionName].execute();
      new Response(this.context).ok(`The function name '${functionName}' is executed complete!`);
    } else {
      new Response(this.context).ok(`The function name '${functionName}' is not found `);
    }
  }
}
