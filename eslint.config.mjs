module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended', // Prettier 통합
  ],
  plugins: [
    'prettier', // Prettier 플러그인 추가
    'html', // eslint-plugin-html 추가
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error', // Prettier 포맷팅 오류를 ESLint 오류로 표시
    // 추가적인 규칙을 여기에 설정할 수 있습니다.
  },
};
