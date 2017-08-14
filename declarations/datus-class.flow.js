// @flow

declare class Datus {
  /**
   * Debug interface to keep noise
   * down in the CLI/logs and to
   * help debug issues with queries.
   * @type {Object}
   */
  debug: Object;

  /**
   * Configuration object used to
   * set up Datus.
   * @type {ConnectionConfig}
   */
  config: ConnectionConfig;

  /**
   * Array of adapters configured
   * to this instance of Datus.
   * @type {Array<Adapter>}
   */
  adapters: Array<Adapter_Interface>;

  /**
   * Connect to each adapter and
   * migrate any data if we're in
   * development mode or the model
   * specifically says to.
   * @param {ConnectionConfig} config to use to connect to each DB.
   */
  constructor(config: ConnectionConfig): Datus;
}
