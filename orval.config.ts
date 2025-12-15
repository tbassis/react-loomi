// orval.config.ts
import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./swagger.json",
    },
    output: {
      mode: "split",
      client: "react-query",
      httpClient: "ky",
      target: "./src/api/generated.ts",
      schemas: "./src/api/model",
      prettier: true,
      clean: true,
    },
  },
});
