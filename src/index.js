// @flow

const knex = require("knex")
const Promise = require("bluebird")
const Model = require("./lib/model")

class DatusInstance {
  constructor(config: ConnectionConfigObject) {
    Object.keys(config.connections)
      .forEach(connection_name => {
        
      })

    return {
      dbs: this,
      Model
    }
  }
}

module.exports = DatusInstance
