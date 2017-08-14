// @flow

declare type init_options = {
  /**
   * Create a model based on the
   * table structure.
   *
   * Creating a model this way around
   * is only useful for those who want
   * to leverage an existing database.
   *
   * @type {string}
   */
  from?: string;

  attributes?: Column;
}

class Model<T> implements Model_Interface<T> {
  datus_instance: DatusInstance;
  adapter: Adapter;

  constructor(options: init_options): Model {

  }

  static new_model_from_table(binding: DatusInstance, table_name: string) {
    const instance = new Model({from: table_name})
    instance.datus_instance = binding
    return instance
  }
}

module.exports = Model
