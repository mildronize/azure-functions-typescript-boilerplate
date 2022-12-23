import { sharedEnvMock } from '../../environments/app-environment.test';
import { parseEnv } from '../../environments/environment';
import { functionEnvSchema } from './environment-schema';

describe('Test ParseEnv for Function SampleFunctionTimer', () => {
  describe('Test on IsEnable', () => {
    it('When isEnable = "1"', () => {
      const mockEnv = {
        ...sharedEnvMock,
        SampleFunctionTimer__IsEnable: '1',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = true;
      expect(actual.SampleFunctionTimer__IsEnable).toEqual(expected);
    });

    it('When isEnable = "0"', () => {
      const mockEnv = {
        ...sharedEnvMock,
        SampleFunctionTimer__IsEnable: '0',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = false;
      expect(actual.SampleFunctionTimer__IsEnable).toEqual(expected);
    });

    it('When isEnable is not assigned', () => {
      const mockEnv = {
        ...sharedEnvMock,
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = true;
      expect(actual.SampleFunctionTimer__IsEnable).toEqual(expected);
    });
  });

  describe('Test on IsSlient', () => {
    it('When IsSlient = "1"', () => {
      const mockEnv = {
        ...sharedEnvMock,
        SampleFunctionTimer__IsSlient: '1',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = true;
      expect(actual.SampleFunctionTimer__IsSlient).toEqual(expected);
    });

    it('When IsSlient = "0"', () => {
      const mockEnv = {
        ...sharedEnvMock,
        SampleFunctionTimer__IsSlient: '0',
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = false;
      expect(actual.SampleFunctionTimer__IsSlient).toEqual(expected);
    });

    it('When IsSlient is not assigned', () => {
      const mockEnv = {
        ...sharedEnvMock,
      };
      const actual = parseEnv(functionEnvSchema, mockEnv);
      const expected = false;
      expect(actual.SampleFunctionTimer__IsSlient).toEqual(expected);
    });
  });
});
