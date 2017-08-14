declare type ConnectionConfigObject = {
  [string]: ConnectionConfig
}

declare type ConnectionConfig = {
  adapter: string;
  host?: string;
  port?: number;
  user?: string;
  pass?: string;
  name: string;
  secure?: boolean;
}
