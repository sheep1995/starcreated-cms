import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pluginRewriteAll from 'vite-plugin-rewrite-all';
//import Pages from 'vite-plugin-pages'
//import Paginate from "vuejs-paginate-next";
//const config = loadEnv(mode, './')

// https://vitejs.dev/config/
export default defineConfig({
  base: "/starcreated-cms/",
  plugins: [
    vue(), 
    pluginRewriteAll(),
    // Pages({
    //   pagesDir: 'src/pages',
    //   extensions: ['vue']
    // })
  ],
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
  //     '/dshboard' : {
  //       //target: 'http://localhost:5173/starcreated-cms/',
  //       target: 'https://stage.westar-cms.com/v1/dshboard',
  //       //target: config.VITE_PATH,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/dshboard/, '')
  //     },
  //   },
  // },
});
