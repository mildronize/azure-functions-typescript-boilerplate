import { Context } from '@azure/functions';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { ICallableFunction } from '../../utils';
import { parseEnv } from '../../environment';
import { functionEnvSchema } from './environment-schema';

export class SampleFunctionTimer extends ICallableFunction {
  constructor(private context: Context) {
    super(context);
  }

  public async execute(): Promise<void> {
    const env = parseEnv(functionEnvSchema, process.env as Record<string, unknown>);

    const FunctionName = 'SampleFunctionTimer';

    if (env.SampleFunctionTimer__IsEnable === false) {
      this.context.log(
        `The function is skipped because '${FunctionName}__IsEnable' = ${env.SampleFunctionTimer__IsEnable}`
      );
      return;
    }

    try {

    } catch (error) {
    }

  }
}
