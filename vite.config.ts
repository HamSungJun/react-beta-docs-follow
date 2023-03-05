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
    visualizer({ filename: 'dist/client/stats.yml', template: 'list' }),
  ],
  build: {
    outDir: 'dist/client',
  },
};

const VITE_SERVER_BUILD_CONFIG: UserConfig = {
  ...VITE_COMMON_CONFIG,
  plugins: [
    reactSwc(),
    visualizer({ filename: 'dist/server/stats.yml', template: 'list' }),
  ],
  build: {
    rollupOptions: {
      input: 'src/entry.server.tsx',
    },
    outDir: 'dist/server',
  },
};
