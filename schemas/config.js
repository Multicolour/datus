"use strict"

const Joi = require("joi")

const connection_schema = Joi.object({
  adapter: Joi.string().required(),
  host: Joi.string().default("localhost"),
  port: Joi.string(),
  username: Joi.string(),
  password: Joi.string(),
  database: Joi.string().required()
})

module.exports = Joi.object({
  adapters: Joi.object().pattern(/\w/, Joi.object()).required(),
  connections: Joi.object().pattern(/\w/, connection_schema).required()
})
