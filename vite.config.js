import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//const config = loadEnv(mode, './')

// https://vitejs.dev/config/
export default defineConfig({
  base: "/starcreated-cms/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      //'@': path.resolve(__dirname, './src'),
    },
  },
  //https://blog.csdn.net/Dawnchen1/article/details/118994062
  build:{
    chunkSizeWarningLimit:1500,
    rollupOptions: {
      output:{
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  // server: {
  //   //open: true,
  //   //port: 5173,
  //   proxy: {
  //     '/login' : {
  //       //target: 'http://localhost:5173/starcreated-cms/',
  //       target: 'https://stage.westar-cms.com/v1/login',
  //       //target: config.VITE_PATH,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/login/, '')
  //     },
  //   },
  // },
});
