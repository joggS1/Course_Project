module.exports = {
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:i18next/recommended'
    ],
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    overrides: [{
        files: ['*.ts', '*.tsx'],
        parserOptions: {
            project: ['tsconfig.json']
        }
    },
    {
        files: ['**/src/**/*.test.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['i18next'],
    rules: {
        '@typescript-eslint/no-shadow': 0,
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
                disallowTypeAnnotations: false
            }
        ],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function'
            }
        ],
        'react/prop-types': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/button-has-type': 0,
        'react/no-unstable-nested-components': [
            2,
            {
                allowAsProps: true
            }
        ],
        'react/no-array-index-key': 0,
        'no-param-reassign': 0,
        // 'sort-keys': [1, 'asc', {
        //     natural: true,
        //     allowLineSeparatedGroups: true
        // }],
        'no-console': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        }],
        'react/jsx-sort-props': [
            2,
            {
                "callbacksLast": true,
                "shorthandFirst": true,
                multiline: 'last',
                ignoreCase: true,
                reservedFirst: true
            }
        ],
        'import/order': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,
        'import/export': 0,
        'import/order': [
            2,
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                pathGroups: [{
                    pattern: '@/**',
                    group: 'internal'
                }],
                alphabetize: {
                    order: 'asc'
                }
            }
        ],
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': ['error', { "ignoreComments" : true, "code": 100 }]
    },
};