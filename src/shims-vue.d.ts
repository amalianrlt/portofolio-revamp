/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Image declarations for various formats
declare module '*.svg' {
  const content: string
  export default content
}
declare module '*.jpg';
declare module '*.png';

declare module '*.jpeg' {
  const content: any
  export default content
}

declare module '*.gif' {
  const content: any
  export default content
}

// Specifically declare image paths used in the project
declare module '@/assets/images/projects/*.png' {
  const value: any
  export default value
}

declare module '@/assets/images/stacks/*.png' {
  const value: any
  export default value
}
