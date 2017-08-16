// @flow

declare interface Model_Interface {
  /**
   * If the database supports schemas
   * (like PostgreSQL) then supply this
   * value to create this model under
   * that schema.
   * @type {string}
   */
  schema?: string;

  /**
   * The adapter this model is
   * going to connect to and run on.
   * @type {Adapter_Interface}
   */
  adapter: Adapter_Interface;

  /**
   * The columns of this table/collection
   * and their definition.
   * @type {Object}
   */
  attributes: {
    [string]: Column
  };

  /**
   * Create a new Query that will
   * perform a seach on the db.
   * @return {Query} query that hasn't run yet.
   */
  find(): Query;

  /**
   * Create a new Query that will
   * delete records from the table.
   * @return {Query} query that hasn't run yet.
   */
  delete(): Query;

  /**
   * Create a new Query that will
   * update records in the table.
   * @return {Query} query that hasn't run yet.
   */
  update(): Query;

  /**
   * Insert a single model or Set of models
   * into the table.
   *
   * Is a Set and not an Array to best ensure
   * the order of insertion as possible.
   * @param {Set<M> | M} models where T is the implementor of this interface.
   * @return {Query} query in progress.
   */
  insert<M>(models: Set<M> | M): Query;

  /**
   * Insert or update a single model
   * or a set of models.
   *
   * Is a Set and not an Array to best ensure
   * the order of insertion as possible.
   *
   * The update_values should be in the same
   * order as the search_or_create values,
   * even if the intervening values of update_values
   * are falsey (They must be) they must exist to preserve order.
   *
   * @param {Set<M> | M} search_or_create models to search for or create.
   * @param {Set<M> | M} update_values the values to write if the model already exists.
   * @return {Query} query that hasn't run yet.
   */
  upsert<M>(search_or_create: Set<M> | M, update_values: Set<M | void> | M): Query;

  /**
   * Perform a count on the table.
   * @return {Query} query that hasn't run yet.
   */
  count(): Query;

  /**
   * Select which columns to return
   * from any query (all types apart from delete).
   *
   * If this function is not called,
   * "*" is used as a wildcard and it
   * returns all columns of the table
   * regardless of whether they are
   * defined in the schema or not.
   *
   * @param {Set<$Keys<M>>} columns to return from the query.
   * @return {Query} query that hasn't run yet.
   */
  select<M>(columns: Set<$Keys<M>>): Query;

  /**
   * Convert this instance of a model
   * to plain JSON using the reducer
   * to update or remove keys before
   * returning.
   * @param {function?} reducer; optional, to use to modify object before return.
   * @return {$Keys<M>} JSON object filtered by the reducer.
   */
  toJSON<M>(reducer?: $Keys<M>): $Keys<M>;
}
