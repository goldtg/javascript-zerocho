module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended'],
  plugins: [
    'prettier',
    'html', // eslint-plugin-html 추가
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    // 필요에 따라 추가 규칙 설정
  },
};
