import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: here });
const config = [...compat.extends("next/core-web-vitals"), { ignores: [".next/**", "next-env.d.ts"] }];
export default config;
