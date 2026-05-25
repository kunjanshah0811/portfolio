import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️  EDIT THIS: Change to your GitHub repo name
//    e.g. if your repo URL is github.com/kunjanshah0811/portfolio → base: '/portfolio/'
//    If you use a custom domain (kunjanshah.dev), set base: '/'
const REPO_NAME = '/portfolio/'

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME,
})
