// @flow

declare type AttributeType =
  /** Declared as text type in a table. */
  "string" |
  /** Declared as an interger of size 32 */
  "int32" |
  /** Declared as an interger of size 64 */
  "int64" |
  /** Declared as a date field */
  "date" |
  /** Declared as a time field */
  "time" |
  /** Declared as a datetime field (with timezone if supported) */
  "datetime";

// Simple aliases for validation.
// We can validate on these as we
// parse the Flow.
declare type EmailType = string;
declare type TelephoneType = string;
declare type Float32 = number;
declare type Float64 = number;
declare type Time = Date;
declare type DateTime = Date;
