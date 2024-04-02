import pages from '@hono/vite-cloudflare-pages'
import honox from 'honox/vite'
import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/styles.css'],
          output: {
            assetFileNames: 'static/assets/[name]-[hash].[ext]',
          },
        },
      },
      plugins: [client({assetsDir: 'static/assets'})]
    }
  } else {
    return {
      plugins: [honox({islands: true, islandComponents: {isIsland: () => true}}), pages()],
      build: {
        assetsDir: "static/assets",
        ssrEmitAssets: true,
      },
    }
  }
})