// @flow

class Memory_Adapter implements Adapter_Interface {
  config: ConnectionConfig
  connection: Connection

  constructor(connection_config: ConnectionConfig) {
    this.config = connection_config


  }
}

module.exports = Memory_Adapter
