"use strict"

class Adapter {
  constructor() {
    return new Promise((resolve, reject) => 
      reject(new TypeError("Cannot use Adapter interface as a database adapter.")))
  }

  find(query) {

  }

  update(query, data) {

  }

  delete(query) {

  }
}

module.exports = Adapter
