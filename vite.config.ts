import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import babel from '@rolldown/plugin-babel'
import jotaiDebugLabel from 'jotai-babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai-babel/plugin-react-refresh'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    babel({
      plugins: [jotaiDebugLabel, jotaiReactRefresh]
    })
  ],
})
