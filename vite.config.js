import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Nuradil.github.io/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@babel/plugin-transform-react-jsx"],
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    minify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
});
