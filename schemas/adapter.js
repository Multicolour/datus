"use strict"

const Joi = require("joi")

module.exports = Joi.object({
  connection: Joi.any().required()
})
