"use strict"

const Joi = require("joi")

module.exports = Joi.object({
  /**
   * The connect function takes one argument of
   * the config to connect to the database.
   *
   * It should return a Promise which is in a
   * pending state.
   *
   * @param {Object} config to pass to the underlying adapter.
   * @return {Promise} promise to continue execution.
   */
  connect: Joi.func().arity(1).required(),

  /**
   * The find function finds rows and documents
   * within the database underneath. The function
   * takes two arguments which are the search criteria
   * to find within the dataset and options to pass such
   * as limit.
   *
   * Returns an instance of the QueryTranslator.
   *
   * Once executed, resolved promise will receive an Array
   * of results from the database.
   *
   * @param {Object} search_criteria to find data on.
   * @param {Object} options to pass to the adapter.
   * @return {QueryTranslator} query_translator for continueing query build or execution.
   */
  find: Joi.func().arity(2).required(),

  /**
   * The update function updates the database
   * and takes 2 arguments, the first is the search
   * criteria and the second is the data to write.
   *
   * Once executed, resolved promise will receive an Array
   * of updated results from the database.
   *
   * @param {Object} search criteria to update on.
   * @param {Object} values values to set on the found records.
   * @param {Object} options to pass to the adapter
   * @return {Promise} promise in either a rejected or resolved state.
   */
  update: Joi.func().arity(3).required(),

  /**
   * The delete function deletes rows and documents
   * within the database underneath. The function
   * takes two arguments which are the search criteria
   * to find within the dataset and options to pass such
   * as limit.
   *
   * Once executed, resolved promise will receive an Array
   * of deleted results from the database.
   *
   * @param {Object} search_criteria to find data on.
   * @param {Object} options to pass to the adapter.
   * @return {Promise} promise in either a rejected or resolved state.
   */
  delete: Joi.func().arity(2).required()
})
