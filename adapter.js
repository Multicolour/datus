// @flow

const knex = require("knex")

class Adapter implements Adapter_Interface {
  constructor(config: ConnectionConfig) {
    this.config = config
  }
}

module.exports = Adapter