// @flow

const {symbols} = require("./recommended")

class Interface {
  constructor() {
    // Somewhere to keep the errors.
    const errors: Set<string> = new Set()

    // Get the symbolised field with our
    // interface requirements in it.
    const required = this[symbols.INTERFACE]

    // Get an object that represents our class.
    const prototype = Object.getPrototypeOf(this)
    const class_funcs = Object.getOwnPropertyNames(prototype)
    const class_as_object = {}
    class_funcs.forEach(func => class_as_object[func] = this[func].length)

    // Validate the consuming class.
    Object.keys(required).forEach(member => {
      if (!class_as_object.hasOwnProperty(member)) {
        errors.add(`Missing function "${member}", should take ${required[member]} arguments`)
      }
      else if (required[member] !== class_as_object[member]) {
        errors.add(`Function "${member}" should take ${required[member]} arguments not ${class_as_object[member]}`)
      }
    })

    // Check for errors.
    if (errors.size > 0) {
      /* eslint-disable */
      console.log(`${this.constructor.name} appears to be broken:`)
      /* eslint-enable */

      throw Array.from(errors).join("\n")
    }
  }
}

module.exports = Interface
