import react from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupPluginRules, fixupConfigRules } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
)),
    {
        plugins: {
            react: fixupPluginRules(react),
            "react-hooks": fixupPluginRules(reactHooks),
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.jest,
            },

            ecmaVersion  : "latest",
            sourceType   : "module",

            parser       : typescriptParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: "detect",
            },
            "import/ignore": ["react-native"],
            "import/resolver": {
                node: {
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            }
        },

        rules: {
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": ["error"],

            "react/jsx-filename-extension": ["warn", {
                extensions: [".tsx"],
            }],

            "import/extensions": ["error", "ignorePackages", {
                ts: "never",
                tsx: "never",
            }],

            "no-shadow": "off",
            "@typescript-eslint/no-shadow": ["error"],

            "import/namespace": "off",

            "@typescript-eslint/explicit-function-return-type": ["error", {
                allowExpressions: true,
            }],

            "max-len": ["warn", {
                code: 100,
                ignoreComments: true,
                ignoreUrls: true,
            }],

            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "import/prefer-default-export": "off",
            "react/prop-types": "off",

            "prettier/prettier": ["error", {
                endOfLine: "auto",
            }],
        },
    },
];