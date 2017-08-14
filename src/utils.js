// @flow

declare type knex_connection_object = {
  host?: string;
  user?: string;
  pass?: string;
  name: string;
}

declare type knex_config = {
  client: mixed;
  connection: string | knex_connection_object;
}

module.exports.config_to_knex_config = (config: ConnectionConfig): $Shape<knex_config> => ({
  client: require(config.adapter),
  connection: {
    host: config.host,
    user: config.user,
    pass: config.pass,
    name: config.name,
    secure: config.secure,
    port: config.port
  }
})
