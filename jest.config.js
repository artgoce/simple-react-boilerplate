module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/app.js',
    '!src/utils/history.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 99,
      functions: 99,
      lines: 99,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/config/mocks/styleModule.js',
  },
  setupFilesAfterEnv: ['<rootDir>/config/tests/test-bundler.js'],
  setupFiles: ['raf/polyfill', '<rootDir>/config/tests/enzyme-setup.js'],
  testRegex: 'tests/.*\\.test\\.js$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
