module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,vue}',
    '**/test/**/*.{js,vue}',
    '!**/*.eslintrc.js',
    '!**/*.config.js',
    '!**/dist/**',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/tests/**'
  ]
}
