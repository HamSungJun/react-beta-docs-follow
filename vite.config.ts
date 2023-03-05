import { fileURLToPath, URL } from 'url';

import { defineConfig, UserConfig } from 'vite';
import reactSwc from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ command, ssrBuild }) => {
  if (command === 'build' && !ssrBuild) return VITE_CLIENT_BUILD_CONFIG;
  if (command === 'build' && ssrBuild) return VITE_SERVER_BUILD_CONFIG;
  return VITE_COMMON_CONFIG;
});

const VITE_COMMON_CONFIG: UserConfig = {
  plugins: [reactSwc()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
};

const VITE_CLIENT_BUILD_CONFIG: UserConfig = {
  ...VITE_COMMON_CONFIG,
  plugins: [
    reactSwc(),
    visualizer({
      filename: 'dist/client/stats.html',
      title: 'client-build',
      template: 'treemap',
    }),
  ],
  build: {
    outDir: 'dist/client',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
};

const VITE_SERVER_BUILD_CONFIG: UserConfig = {
  ...VITE_COMMON_CONFIG,
  plugins: [
    reactSwc(),
    visualizer({
      filename: 'dist/server/stats.html',
      title: 'server-build',
      template: 'treemap',
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'src/entry.server.tsx',
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
    outDir: 'dist/server',
  },
};
