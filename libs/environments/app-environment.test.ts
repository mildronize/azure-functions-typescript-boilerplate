import { parseEnv } from './environment';
import { appEnvSchema } from './app-environment-schema';

// Provide required fields
export const sharedEnvMock = {
  Slack_Webhook_URL: 'http://domain.com',
  WEBSITE_SITE_NAME: 'string',
};

describe('Test ParseEnv for Function SampleFunctionTimer', () => {
  it('When Env is assigned only required fields', () => {
    const mockEnv = {
      ...sharedEnvMock,
      // CustomSlackWarningAlert: 'string',
      // CustomSlackErrorAlert: 'string',
      // InputMatrix: 'test',
      // SampleFunctionTimer__IsEnable: 'test',
      // SampleFunctionTimer__IsSlient: 'test',
    };

    const actual = parseEnv(appEnvSchema, mockEnv);
    const expected_InputMatrix = [
      {
        env_name: '',
        connection_string: 'The connection_string',
      },
    ];
    expect(actual.InputMatrix).toEqual(expected_InputMatrix);
  });
});
