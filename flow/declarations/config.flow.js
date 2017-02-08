declare type DatusConnectionConfig = {
  adapter: Object,
  host?: string,
  port?: number,
  user?: string,
  pass?: string,
  name: string,
  secure?: boolean
}

declare interface DatusConnectionObject {
  [string]: DatusConnectionConfig
}

declare interface DatusAdaptersObject {
  [string]: DatusAdaptersConfig
}

declare interface DatusConfig {
  adapters: DatusAdaptersObject;
  connections: DatusConnectionObject;
}
