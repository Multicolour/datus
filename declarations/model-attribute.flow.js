// @flow

/**
 * If an attribute is defined as an object,
 * it must match this definition.
 */
declare type ColumnDefinition = {
  /** The type of the column to register to the table */
  type: AttributeType;

  /** The default value if the column value isn't present */
  defaultsTo: () => mixed;

  /**
   * Whether to index this column or not, if
   * the index is a string it should be a valid
   * index type for the database technology, if
   * the database technology doesn't support
   * named indexes it will be set to true.
   */
  index: boolean | string;

  /**
   * Whether or not this column is required.
   *
   * Will create a constraint on supported
   * databases as well for extra protection
   * and posterity while transporting.
   */
  required: boolean;
}

/**
 * Each column defined with options
 * should ensure each option matches
 * the ColumnDefinition type.
 */
declare type ColumnDefinitionObject = {
  [string]: ColumnDefinition;
}

/**
 * Columns can be either an ColumnDefinitionObject
 * or a string.
 */
declare type Column = ColumnDefinitionObject | string
