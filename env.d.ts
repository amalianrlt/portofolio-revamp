/// <reference types="vite/client" />

// Declare module for Vue files
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
