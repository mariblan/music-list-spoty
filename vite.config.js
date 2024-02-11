import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// import * as path from "path";
// import { dirname } from "node:path";
// import { fileURLToPath } from "node:url";

// const __dirname =
//   typeof __dirname !== "undefined"
//     ? __dirname
//     : dirname(fileURLToPath(import.meta.url));

// const resolve = (dir) => path.resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});
