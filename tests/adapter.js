"use strict"

const Adapter_Interface = require("../lib/validation/adapter-interface")

class MongoAdapter extends Adapter_Interface {
  constructor() {
    super()

    console.log("THIS", this);
  }

  connect(config) {

  }

  disconnect() {

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
