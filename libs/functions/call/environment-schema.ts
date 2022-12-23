import { z } from 'zod';
import { ToggleFlag } from '../../enum';

/**
 * Require hard code for function name for correcting type
 */
export const functionEnvSchema = z.object({
  Call__IsEnable: z.preprocess(
    /**
     * Parse input to boolean before validate it
     */
    (value: unknown) => (value ? value === ToggleFlag.True : false),
    z.boolean()
  ),
});
