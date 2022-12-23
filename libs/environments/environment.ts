import { z, ZodFormattedError } from 'zod';

export function parseEnv<T extends z.ZodTypeAny>(schema: T, env: Record<string, unknown>): z.infer<T> {
  const _functionEnv = schema.safeParse(env);

  if (_functionEnv.success === false) {
    const message = 'Invalid environment variables';
    zodPrettyError(message, _functionEnv.error.format());
    throw new Error(message);
  }

  return { ..._functionEnv.data };
}

export const zodPrettyError = (message: string, errors: ZodFormattedError<Map<string, string>, string>) => {
  const ouput = Object.entries(errors)
    .map(([name, value]) => {
      if (value && '_errors' in value) return `${name}: ${value._errors.join(', ')}\n`;
    })
    .filter(Boolean);

  console.error(`❌ ${message}:\n`, ...ouput);
};
