import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            semi: ["error", "always"],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-empty-interface": [
                "warn",
                { allowInterfaces: "with-single-extends" },
            ],
            // "no-page-custom-font": false,
            "react-hooks/exhaustive-deps": [
                "warn",
                {
                    additionalHooks: "(useMyCustomHook|useMyOtherCustomHook)",
                },
            ],
        },
    },
    eslintConfigPrettier,
];

export default eslintConfig;
