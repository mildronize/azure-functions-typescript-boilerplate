import { Context } from '@azure/functions';
import { ICallableFunction, parseEnv } from '../../common';
import { functionEnvSchema } from './environment-schema';
import * as dotenv from 'dotenv';
dotenv.config();

export class SampleFunctionTimer extends ICallableFunction {
  constructor(private context: Context) {
    super(context);
  }

  public override async execute(): Promise<void> {
    const env = parseEnv(functionEnvSchema, process.env as Record<string, unknown>);

    const FunctionName = 'SampleFunctionTimer';

    if (env.SampleFunctionTimer__IsEnable === false) {
      this.context.log(
        `The function is skipped because '${FunctionName}__IsEnable' = ${env.SampleFunctionTimer__IsEnable}`
      );
      return;
    }

  }
}
