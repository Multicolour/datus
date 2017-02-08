// @flow

const chalk = require("chalk")
const Joi = require("joi")
const config_schema = require("./schemas/config")
const debug = require("debug")

class Datus {
  debug: Function;
  config: DatusConfig;

  constructor(config: DatusConfig) {
    // Set up the debugger.
    this.debug = debug("datus:core")

    // Validate the config.
    const validation = Joi.validate(config, config_schema)

    // Check for errors.
    if (validation.error) {
      /* eslint-disable */
      console.log(chalk.red.bold.underline("There was an error in your config."))
      console.log(chalk.red(validation.error))
      /* eslint-enable */

      throw validation.error
    }

    // All good, carry on.
    this.config = config
  }
}

module.exports = Datus
