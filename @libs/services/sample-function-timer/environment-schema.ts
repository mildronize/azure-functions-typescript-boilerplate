import { z } from 'zod';
import { appEnvSchema } from '../_shared/app-environment-schema';
import { ToggleFlag } from '../../common';

/**
 * Require hard code for function name for correcting type
 */
const envSchema = z.object({
  SampleFunctionTimer__IsEnable: z.preprocess(
    (value: unknown) => (value ? value === ToggleFlag.True : true),
    z.boolean()
  ),
  SampleFunctionTimer__IsSlient: z.preprocess(
    (value: unknown) => (value ? value === ToggleFlag.True : false),
    z.boolean()
  ),
});

export const functionEnvSchema = appEnvSchema.merge(envSchema);
