import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import {AntDesignVueResolver} from "unplugin-vue-components/dist/resolvers";
// import {Components} from 'unplugin-vue-components/dist/vite.d.ts'





// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [vue(), vueJsx(),
  //   Components({
  //   resolvers: [AntDesignVueResolver()],
  // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
