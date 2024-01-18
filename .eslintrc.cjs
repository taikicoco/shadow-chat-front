module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs,mjs,ts,cts,tsx}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "unused-imports"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "indent": ["error", 4],
        "@typescript-eslint/indent": ["error", 4],
        "no-mixed-spaces-and-tabs": "error", // スペースとタブの混在を禁止
        "object-curly-spacing": ["error", "always"], // オブジェクトリテラルの前後のスペース
        "keyword-spacing": ["error", { "before": true, "after": true }], // キーワードの前後のスペース
        "space-before-function-paren": ["error", "always"], // 関数の括弧の前のスペース
        "space-infix-ops": "error", // 等号の前後にスペースを要求
        "no-unused-vars": "warn", // 未使用の変数を警告
        "unused-imports/no-unused-imports": "error", // 未使用のインポートをエラーとして扱う
        "no-multi-spaces": "error" // 複数の連続したスペースを禁止
    }
};
