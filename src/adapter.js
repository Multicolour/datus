// @flow

const Promise = require("bluebird")
const Connection = require("./connection")

class Memory_Adapter implements Adapter_Interface {
  config: ConnectionConfig
  connection: Connection

  constructor(connection_config: ConnectionConfig) {
    this.config = connection_config
  }

  connect(): Promise<Connection> {
    this.connection =
    return Promise.resolve(this.connection)
  }
}

module.exports = Memory_Adapter
