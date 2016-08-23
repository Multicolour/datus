"use strict"

const chalk = require("chalk")
const Joi = require("joi")
const config_schema = require("./schemas/config")

class Datus {
  constructor(config) {
    const validation = Joi.validate(config, config_schema)

    if (validation.error) {
      /* eslint-disable */
      console.log(chalk.red.bold.underline("There was an error in your config."))
      console.log(chalk.red(validation.error))
      /* eslint-enable */

      throw validation.error
    }

    this.config = config
  }
}

module.exports = Datus
