// @flow

const {parse} = require("flow-parser")
const {readFileSync} = require("fs")

function build_model_from_AST(AST: Object): Object {
  const out = class {}

  return out
}

/**
 * Build a usable model from a flow
 * declaration and return it as an
 * object.
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
function build_model_from_filepath(filepath: string): Object {
  const AST = parse(readFileSync(filepath))

  return build_model_from_AST(AST)
}

module.exports.build_model_from_AST = build_model_from_AST
module.exports.build_model_from_filepath = build_model_from_filepath
