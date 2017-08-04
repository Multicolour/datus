const assert = require("assert")
const Memory_Adapter = require("../src/adapter")

describe("Adapters", () => {
  it("Should instantiate adapter without error.", () => {
    let adapter
    assert.doesNotThrow(() => (adapter = new Memory_Adapter()), "No error instantiating adapter")
    assert.deepStrictEqual(adapter.describe(), {}, "adapter describes {}")
  })
})
