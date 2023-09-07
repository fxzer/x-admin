import { VitePWA } from 'vite-plugin-pwa'
import type { PluginOption } from 'vite'

/**
 * @description VitePwa
 * @param viteEnv
 */
export function setupVitePWA(viteEnv: ViteEnv): PluginOption | PluginOption[] {
  const { VITE_GLOB_APP_TITLE } = viteEnv
  return VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: VITE_GLOB_APP_TITLE,
      short_name: VITE_GLOB_APP_TITLE,
      theme_color: '#ffffff',
      icons: [
        {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  })
}
