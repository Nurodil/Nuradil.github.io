import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Nuradil.github.io/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        format: "esm",
        mimeTypes: {
          js: "application/javascript",
        },
      },
    },
  },
});
