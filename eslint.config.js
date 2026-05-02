import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default [
  ...next,
  {
    rules: {
      'react/jsx-key': 'warn',
      '@next/next/no-img-element': 'off',
    },
  },
  prettier,
];
