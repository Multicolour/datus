// @flow

const {DatusSchema} = require("../src/model")
const assert = require("assert")

describe("Should parse schemas without error", () => {
  it("Can parse simple schema without error", () => {
    assert.doesNotThrow(() => {
      DatusSchema.new_from_flow_file("./content/types/simple.flow.js")
    })
  })

  it("Can parse complex schema without error", () => {
    assert.doesNotThrow(() => {
      DatusSchema.new_from_flow_file("./content/types/complex.flow.js")
    })
  })

  it("Throws error trying to parse non-existent related schema.", () => {
    // This test exists to prove the schema resolver
    // is working and that models that don't have a
    // model to relate to cannot be parse.
    assert.throws(() => {
      DatusSchema.new_from_flow_file("./content/types/user.flow.js")
    }, ReferenceError)
  })

  it("Set path to schemas for resolution and resolves unresolved schemas without error.", () => {
    assert.doesNotThrow(() => {
      DatusSchema
        .path("./content/types")
        .new_from_flow_file("user.flow.js")
    })
  })

  it("Parsed schema is the structure expected.", () => {
    assert.doesNotThrow(() => {
      const model = DatusSchema
        .path("./content/types")
        .new_from_flow_file("simple.flow.js")

      assert.deepEqual(model, require("./content/util/simple-model-structure"))
    })
  })

})
