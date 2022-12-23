module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', { useESM: true }],
    // "^.+\\.tsx?$": "esbuild-jest"
    // "^.+\\.(t|j)sx?$": ["@swc/jest"], // from docs
    // '^.+\\.m?[tj]s?$': ["@swc/jest"],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.(m)?js$': '$1',
  },
  testMatch: ['**/*.test.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.ts', '**/*.mts', '!**/*.d.ts', '!**/*.d.mts', '!node_modules/**/*.ts', '!node_modules/**/*.mts'],
};
