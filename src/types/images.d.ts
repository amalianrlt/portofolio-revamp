// Type definitions for image files
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

// Specific path declarations
declare module '@/assets/images/projects/*.png' {
  const value: string;
  export default value;
}

declare module '@/assets/images/stacks/*.png' {
  const value: string;
  export default value;
}
