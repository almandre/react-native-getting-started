// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ['expo', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                printWidth: 90,
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                jsxSingleQuote: true,
                trailingComma: 'none',
                endOfLine: 'crlf'
            }
        ],
        'react/display-name': 'off'
    }
};
