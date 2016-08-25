"use strict"

const adapter_schema = require("./schemas/adapter")

class Adapter_Interface {
  constructor() {
    const validation = adapter_schema.validate(this.prototype)

    if (validation.errors) {
      return Promise.reject(new TypeError("Cannot use Adapter interface as a database adapter."))
    }
    else {
      return this.connect()
    }
  }
}

module.exports = Adapter_Interface
