// @flow

const {DatusModel} = require("../src/model")
const assert = require("assert")

describe("Should parse models without error", () => {
  it("Parses Flow defined model with simple types", () => {
    assert.doesNotThrow(() => {
      DatusModel.new_from_flow_file("./content/types/user.flow.js")
    })
  })
})
