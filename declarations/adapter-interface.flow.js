// @flow

declare interface Adapter_Interface {
  /**
   * The connection this adapter will consume.
   * @type {Connection}
   */
  connection: Connection;

  /**
   * Config to use to connect to the
   * database underneath.
   * @type {ConnectionConfig}
   */
  config: ConnectionConfig;

  /**
   * Ready the adapter for connection.
   *
   * @param {ConnectionConfig} connection_config to use to connect.
   * @return {Adapter_Interface} implicit return of Adapter instance.
   */
  constructor(connection_config: ConnectionConfig): Adapter_Interface;

  /**
   * Connect to the database using
   * the configuration_config passed
   * in and return an unresolved promise.
   *
   * @return {Promise<Connection>} unresolved promise that resolves with the connection.
   */
  connect(): Promise<Connection>;

  /**
   * Disconnect from the database
   * this adapter connected to.
   *
   * @return {Promise<Connection>} unresolved promise that resolves with the connection.
   */
  disconnect(): Promise<Connection>;


}
