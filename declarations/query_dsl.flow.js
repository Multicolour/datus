// @flow

declare type Where_Operator =
  // Directly equals.
  "=" |
  // Directly not equal.
  "!=" |
  // Greater than.
  ">" |
  // Greater than or equal to.
  ">=" |
  // Less than.
  "<" |
  // Less than or equal to.
  "<=" |
  // Contains value.
  "contains" |
  // Starts with value.
  "^" |
  // Ends with value.
  "$"

declare class Query {
  /**
   * Flip the bits that extend a
   * query to create an and/or
   * query.
   *
   * These are getters but Flow
   * doesn't support getters yet.
   * @return {Query}
   */
  static and(): Query;
  static or(): Query;

  /**
   * Start a where query with a column,
   * value and optional operator.
   *
   * Default operator is directly equals (=).
   * @param {<T.columns>} column to do query on.
   * @param {mixed} value to do comparison on.
   * @return {Query} query to continue the query on.
   */
  where(column: $Keys<T.columns>, value: mixed, operator?: Where_Operator): Query<T>;

  /**
   * Run a query where the comparison value
   * is between the left and right values.
   *
   * Is the same as
   * ```
   * model
   *   .where("column", 1, ">=")
   *   .and
   *   .where("column", 3, "<=")
   * ```
   * @param {$Keys<T.columns>} column to query.
   * @param {any} comparison_value to use as the value between left and right values.
   * @param {any} left_value value to use on L side of comparison where V BETWEEN L AND R
   * @param {any} right_value value to use on R side of comparison where V BETWEEN L AND R
   * @return {Query} query to continue the query on.
   */
  between(column: $Keys<T.columns>, comparison_value: any, left_value: any, right_value: any): Query<T>;


  then(callback: (results: T) => void): Query;
}
