module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:storybook/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'i18next',
        'react-hooks',
        'feature-sliced-plugin-custom',
        'unused-imports',
        'import',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
            },
        ],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'warn',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, 'jsx-attributes': { exclude: ['data-testid'] } },
        ],
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
            { ignoreArrowShorthand: true, ignoreVoidOperator: true },
        ],
        '@typescript-eslint/prefer-includes': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',
        'feature-sliced-plugin-custom/path-checker': [
            'error',
            {
                alias: '@',
            },
        ],
        'feature-sliced-plugin-custom/public-api-imports-checker': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.(stories|test).@(js|jsx|mjs|ts|tsx)',
                    '**/storybook/**Decorator.tsx',
                ],
            },
        ],
        'feature-sliced-plugin-custom/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        IS_DEV: true,
        API_URL: true,
        EXECUTION_ENVIRONMENT: true,
    },
    overrides: [
        {
            files: ['*.test.tsx', '*.test.ts', '*.stories.tsx'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
        {
            files: ['*.test.tsx', '*.test.ts'],
            rules: {
                // you should turn the original rule off *only* for test files
                '@typescript-eslint/unbound-method': 'off',
                'jest/unbound-method': 'off',
            },
        },
    ],
}
