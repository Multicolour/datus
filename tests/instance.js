// @flow

const {DatusInstance} = require("../src/index")
const assert = require("assert")

describe("Create an instance of Datus, register some models, start & close connections.", () => {
  it("Should create an instance without config, without error", () => {
    assert.doesNotThrow(() => {
      new DatusInstance()
    })
  })

  it("Should create an instance with 'iffy' config, without error", () => {
    assert.doesNotThrow(() => {
      new DatusInstance({
        connections: {}
      })
    })
  })

  it("Should create an instance with config, without error", () => {
    assert.doesNotThrow(() => {
      new DatusInstance({
        connections: {
          memory: {
            adapter: "memory"
          }
        }
      })
    })
  })
})
