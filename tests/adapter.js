const test = require("tape")
const Adapter_Interface = require("../lib/validation/adapter-interface")

class Memory_Adapter extends Adapter_Interface {
  constructor() {
    super()

    this.data = {}
  }

  connect(config) {
    return new Promise((resolve, reject) => {
      this.db = config.db || ""
    })
  }

  disconnect() {
    this.data = {}
    return this
  }

  describe() {
    return this.data
  }

  update(criteria, values, options) {

  }

  delete(criteria, options) {

  }

  find(criteria, options) {

  }
}

test(assert => {
  assert.plan(2)
  let adapter
  assert.doesNotThrow(() => (adapter = new Memory_Adapter()), "No error instantiating adapter")
  assert.deepEqual(adapter.describe(), {}, "adapter describes {}")
})
