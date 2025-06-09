/** @format */

module.exports = {
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-return-await': 'off',
        camelcase: 'warn',
        'no-underscore-dangle': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/order': 'warn',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: ['function-declaration', 'arrow-function'],
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-filename-extension': ['off', { extensions: ['.js', '.jsx'] }],
        'no-undef': 'warn',
        'no-shadow': 'warn',
        'no-unused-vars': 'warn',
        'unicorn/filename-case': 'off',
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/naming-convention': 'off',
        'import/no-extraneous-dependencies': 'warn',
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                'arrow-body-style': 'off',
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
