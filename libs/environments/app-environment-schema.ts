import { z } from 'zod';
import { toError } from '../utils';

export const InputMatrixSchema = z.object({
  env_name: z.string(),
  connection_string: z.string(),
});

/**
 * App-Level Environment Variable using across functions in this app
 */
export const appEnvSchema = z.object({
  Slack_Webhook_URL: z.string().url(),
  /**
   * Automatic assigned by Azure Function
   */
  WEBSITE_SITE_NAME: z.string(),
  /**
   * Custom Slack Warning Alert e.g. Slack person name
   */
  CustomSlackWarningAlert: z.string().optional(),
  /**
   * Custom Slack Error Alert e.g. Slack person name
   */
  CustomSlackErrorAlert: z.string().optional(),
  /**
   * The env used to check
   */
  InputMatrix: z.preprocess(
    /**
     * Parse input to JSON object before validate it
     */
    (value: unknown) => {
      try {
        return JSON.parse(value as string);
      } catch(error) {
        throw new Error(`Environment Variable 'InputMatrix' is not assigned or cannot convert to JSON object, ${toError(error)}`);
      }
    },
    z.array(InputMatrixSchema)
  ),
});
