module.exports = {
  root: true,
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
    require.resolve('eslint-config-airbnb-typescript'),
  ],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-indent': 0,
    'no-console': 'off',
    'object-curly-newline': 'off',
  },
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    project: require.resolve('./tsconfig.json'),
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
