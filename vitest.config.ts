import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ['./vitest.setup.ts'],
      root: import.meta.dirname,
      environment: "jsdom",
      // exclude: ["**/node_modules/*"],
      globals: true, // config types: "vitest/globals"
      reporters: ["verbose"],
      coverage: {
        include: ["core/**/*.js"],
        exclude: ["./src/trash"],
        provider: "v8",
        reporter: ["text", "html"],
      },
    },
  }),
);
