import "dotenv/config";
import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: "./swagger.json",
    },
    output: {
      mode: "split",
      client: "react-query",
      httpClient: "fetch",
      target: "./src/api/generated.ts",
      schemas: "./src/api/model",
      prettier: true,
      clean: true,
      baseUrl: process.env.NEXT_PUBLIC_API_URL,
    },
  },
});
