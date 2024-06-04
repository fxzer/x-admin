import { VitePWA } from 'vite-plugin-pwa'
import type { PluginOption } from 'vite'

export function setupVitePWA(viteEnv: ViteEnv): PluginOption | PluginOption[] {
  const { VITE_APP_TITLE: NAME } = viteEnv
  // return VitePWA({
  //   // strategies: 'injectManifest',
  //   // srcDir: 'public',
  //   // filename: 'sw.js',
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: NAME,
  //     short_name: NAME,
  //     theme_color: '#ecf5ff',
  //     icons: [
  //       {
  //         src: '/logos/logo_512.png',
  //         types: 'img/png',
  //         sizes: '512x512',
  //         purpose: 'any',
  //       },
  //       {
  //         src: '/logos/logo_256.png',
  //         types: 'img/png',
  //         sizes: '256x256',
  //         purpose: 'maskable',
  //       },
  //       {
  //         src: '/logos/logo_192.png',
  //         types: 'img/png',
  //         sizes: '192x192',
  //         purpose: 'maskable',
  //       },
  //       {
  //         src: '/logos/logo_144.png',
  //         types: 'img/png',
  //         sizes: '144x144',
  //         purpose: 'maskable',
  //       },
  //       {
  //         src: '/logos/logo_128.png',
  //         types: 'img/png',
  //         sizes: '128x128',
  //         purpose: 'maskable',
  //       },
  //       {
  //         src: '/logos/logo_72.png',
  //         types: 'img/png',
  //         sizes: '72x72',
  //         purpose: 'maskable',
  //       },
  //       {
  //         src: '/logos/logo_48.png',
  //         types: 'img/png',
  //         sizes: '48x48',
  //         purpose: 'maskable',
  //       },
  //     ],
  //   },
  //   integration: {
  //     configureOptions(viteConfig, options) {
  //       if (viteConfig.command === 'build')
  //         options.includeAssets = fg.sync('**/*.*', { cwd: join(process.cwd(), 'public'), onlyFiles: true })
  //     },
  //   },
  //   devOptions: {
  //     enabled: process.env.PWA_DEV === 'true',
  //     type: 'module',
  //     navigateFallback: 'index.html',
  //   },
  // })
  return VitePWA({
    outDir: 'dist',
    manifest: {
      name: NAME,
      short_name: NAME,
      theme_color: '#ffffff',
      icons: [
        {
          src: '/logos/logo_512.png',
          type: 'img/png',
          sizes: '512x512',
          purpose: 'any',
        },
        {
          src: '/logos/logo_192.png',
          type: 'img/png',
          sizes: '192x192',
          purpose: 'maskable',
        },
      ],
    },
  })
}
