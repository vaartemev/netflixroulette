module.exports = {
  setupFiles: ['<rootDir>/setupTests.js'],
  modulePathIgnorePatterns: ['setupTests.js', '\\\\node_modules\\\\'],
  moduleNameMapper: {
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^actions(.*)$': '<rootDir>/src/actions$1',
    '^constants.js(.*)$': '<rootDir>/src/constants.js$1',
    '^src(.*)$': '<rootDir>/src$1',
    '^reducers(.*)$': '<rootDir>/src/reducers$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^sagas(.*)$': '<rootDir>/src/sagas$1',
    '^.+\\.js(jsx)$': 'babel-jest',
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
  verbose: false,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/**/*story.js',
  ],
};
