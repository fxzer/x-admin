/* Menu */
declare namespace Menu {
  interface MenuOptions {
    path: string
    name: string
    component?: string | (() => Promise<unknown>)
    redirect?: string
    meta: MetaProps
    children?: MenuOptions[]
  }
  interface MetaProps {
    icon: string
    title: string
    activeMenu?: string
    isLink?: string
    isHide: boolean
    isFull: boolean
    isAffix: boolean
    isKeepAlive: boolean
  }
}

/* FileType */
declare namespace File {
  type ImageMimeType =
    | 'image/apng'
    | 'image/bmp'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/pjpeg'
    | 'image/png'
    | 'image/svg+xml'
    | 'image/tiff'
    | 'image/webp'
    | 'image/x-icon'

  type ExcelMimeType = 'application/vnd.ms-excel' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}

/* Vite */
declare type Recordable<T = any> = Record<string, T>

declare interface ViteEnv {
  VITE_USER_NODE_ENV: 'development' | 'production' | 'test'
  VITE_APP_TITLE: string
  VITE_PORT: number
  VITE_OPEN: boolean
  VITE_REPORT: boolean
  VITE_COMPRESS_ALGORITHM: 'gzip' | 'brotli' | 'gzip,brotli' | 'none'
  VITE_DELETE_COMPRESS_ORIGIN_FILE: boolean
  VITE_DROP_CONSOLE: boolean
  VITE_PUBLIC_PATH: string
  VITE_API_URL: string
  VITE_PROXY: [string, string][]
  VITE_AUTO_EP: boolean
  VITE_INSPECT: boolean
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

/* __APP_INFO__ */
declare const __APP_INFO__: {
  pkg: {
    name: string
    version: string
    dependencies: Recordable<string>
    devDependencies: Recordable<string>
  }
  lastBuildTime: string
}

/* Generic Tools */
type ObjToKeyValUnion<T> = {
  [K in keyof T]: { key: K, value: T[K] };
}[keyof T]

type ObjToKeyValArray<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T]

// 声明 @pureadmin/utils 模块 ，模块中含 getPackageSize 方法
declare module '@pureadmin/utils' {
  export function getPackageSize(options: { folder: string, callback: (size: string) => void }): void
  export function darken(color: string, weight: number): string
  export function lighten(color: string, weight: number): string
}
