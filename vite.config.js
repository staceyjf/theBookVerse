import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // Convert .env variables so i can use process.env.nameoenv
  const processEnv = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return defineConfig({
    plugins: [react()],
    base: "/theBookVerse/",
    define: processEnv,
  });
};
