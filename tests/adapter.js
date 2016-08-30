"use strict"

const {symbols} = require("../lib/recommended")
const Adapter_Interface = require("../lib/validation/adapter-interface")
const {MongoClient} = require("mongodb")

class MongoAdapter extends Adapter_Interface {
  get [symbols.IS_SCHEMA_ONLY]() {
    return true
  }

  constructor() {
    super()
  }

  connect(config) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(config.url, config.options, (err, connection) => {
        if (err) reject(err)
        else {
          this.connection = connection
          resolve()
        }
      })
    })
  }

  disconnect() {
    return this.connection.close()
  }

  describe() {
    
  }

  update(criteria, values, options) {

  }

  delete(criteria, options) {

  }

  find(criteria, options) {

  }
}

new MongoAdapter()
