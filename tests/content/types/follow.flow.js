// @flow

declare type Follow<pk> = {
  ref: pk;
  user: User;
  followed: User;
}
