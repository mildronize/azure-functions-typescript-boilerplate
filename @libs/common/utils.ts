import { Context } from '@azure/functions';
import { z } from 'zod';

export abstract class ICallableFunction<T> {
  constructor(context: Context) {}

  public async execute(): Promise<T> {
    throw new Error(`The method 'execute' is required to implement!`);
  }
}

/**
 * Handling Error Message
 */

const errorWithMessageSchema = z.object({
  message: z.string(),
});

type ErrorWithMessage = z.infer<typeof errorWithMessageSchema>;

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return errorWithMessageSchema.safeParse(error).success;
}

export function toError(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

