// Get the assertion library.
const assert = require("assert")

// Get the target model.
const user_flow_path = __dirname + "/content/types/user.flow.js"

const models = require("../src/lib/model")

// Tests.
describe("Models", () => {
  it("Should compile the user flow model definition into an object without error.", () => {
    assert.doesNotThrow(() => models.build_model_from_filepath(user_flow_path))
  })

  it("Should compile the user flow model definition into an object and it's the right shape.", () => {
    const compiled = models.build_model_from_filepath(user_flow_path)
    const compared = {}
    assert.deepStrictEquals(compiled, compared)
  })
})
