import { parseEnv } from '../../environments/environment';
import { functionEnvSchema } from './environment-schema';

describe('Test ParseEnv for Function Call', () => {
  describe('Test on IsEnable', () => {
    it('When isEnable = "1"', () => {
      const mockEnv = {
        Call__IsEnable: '1',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = true;
      expect(actual.Call__IsEnable).toEqual(expected);
    });

    it('When isEnable = "0"', () => {
      const mockEnv = {
        Call__IsEnable: '0',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = false;
      expect(actual.Call__IsEnable).toEqual(expected);
    });

    it('When isEnable is not assigned', () => {
      const mockEnv = {};
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = false;
      expect(actual.Call__IsEnable).toEqual(expected);
    });
  });
});
