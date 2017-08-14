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
   * perform a search on the db with
   * an explicit limit(1) on it.
   * @return {Query} query that hasn't run yet.
   */
  findOne(): Query;

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
   * @param {Set<T> | T} models where T is the implementor of this interface.
   * @return {Query} query in progress.
   */
  insert(models: Set<T> | T): Query;

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
   * @param {Set<T> | T} search_or_create models to search for or create.
   * @param {Set<T> | T} update_values the values to write if the model already exists.
   * @return {Query} query that hasn't run yet.
   */
  upsert(search_or_create: Set<T> | T, update_values: Set<T | void> | T): Query;

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
   * defined on the table or not.
   *
   * @param {Set<$Enum<typeof T.columns>>} columns to return from the query.
   * @return {Query} query that hasn't run yet.
   */
  select(columns: Set<$Enum<typeof T.columns>>): Query;

  /**
   * Convert this instance of a model
   * to plain JSON using the reducer
   * to update or remove keys before
   * returning.
   * @param {function} reducer to use to modify object before return. Optional.
   * @return {$Keys<T.columns>} JSON object filtered by the reducer.
   */
  toJSON(reducer?: $Keys<T.columns>): $Keys<T.columns>;
}
