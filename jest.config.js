module.exports = {
  verbose: true,
  setupFiles: [
    '<rootDir>/config/test/enzyme.js'
  ],

  moduleDirectories: [
    'node_modules',
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub'
  }
}
