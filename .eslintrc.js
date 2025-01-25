module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:react/recommended'], // react 플러그인 추가
  parser: '@babel/eslint-parser', // Babel 파서 사용
  parserOptions: {
    requireConfigFile: false, // Babel config 파일 없이도 작동
    ecmaFeatures: {
      jsx: true, // JSX 문법을 처리하도록 설정
    },
  },
  plugins: ['react'], // react 플러그인 활성화
  env: {
    browser: true,
    node: true,
  },
};
