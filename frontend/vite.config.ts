/*
Author: Assistant <assistant@ai.com>
Created: 2024-12-19
Purpose: Vite configuration for SolidJS with Tailwind v4 integration and TypeScript support
*/

import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});
