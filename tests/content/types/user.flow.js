// @flow

/**
 * Types defined using Flow lack constraints,
 * I believe constraints should live within the
 * target database and not in a software level
 * consuming it. Handle errors better is the way
 * forwards. Fault-tolerant.
 */
declare type User = {
  name: string;
  age: number;
  email: ?EmailType;
  telephone: ?TelephoneType;
  aliases: Array<string>;
  things: Array<Thing>;
  follows: Array<Follow<ref>>
}
