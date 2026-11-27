/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CONTACT_URL?: string;
  readonly VITE_CONTACT_LABEL?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
