
interface ViteEnv {
    VITE_SOME_KEY: number
    VITE_ROUTE_AUTOLOAD: boolean
    VITE_BASE_URL?: string
}

interface ImportMetaEnv extends ViteEnv {
    readonly VITE_APP_TITLE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}