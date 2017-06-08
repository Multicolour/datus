

const Joi = require("joi")

const connection_schema = Joi.object({
  adapter: Joi.object().required(),
  host: Joi.string().default("localhost"),
  port: Joi.string(),
  username: Joi.string(),
  password: Joi.string(),
  database: Joi.string().required()
})

module.exports = Joi.object({
  connections: Joi.object().pattern(/\w/, connection_schema).required()
})
