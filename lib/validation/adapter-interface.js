"use strict"

const Interface = require("../interface")
const {symbols} = require("../recommended")

class Adapter_Interface extends Interface {
  get [symbols.INTERFACE]() {
    return {
      /**
       * The connect function takes one argument of
       * the config to connect to the database.
       *
       * It should return a Promise.
       *
       * @param {Object} config to pass to the underlying adapter.
       * @return {Promise} promise to continue execution.
       */
      connect: 1,

      /**
       * The disconnect function disconnects from the database and
       * throws away any/all data it has in memory.
       *
       * It should return a Promise.
       *
       * @param {Object} config to pass to the underlying adapter.
       * @return {Promise} promise to continue execution.
       */
      disconnect: 0,

      /**
       * The describe function returns information on
       * the contents of the database, returning Table names,
       * columns, types of your columns and indexes.
       *
       * It should return a Promise.
       *
       * @param {Object} config to pass to the underlying adapter.
       * @return {Promise} promise to continue execution.
       */
      describe: 0,

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
      find: 2,

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
      update: 3,

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
      delete: 2
    }
  }
}

module.exports = Adapter_Interface
