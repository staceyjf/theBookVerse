// import { defineConfig, loadEnv } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default ({ command, mode }) => {
//   process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

//   return defineConfig({
//     plugins: [react()],
//     base: "/theBookVerse/",
//   });
// };

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/theBookVerse/",
});
