// Get Datus.
const DatusInstance = require("../src/index")

// Create an instance of Datus
// which connects to the databases.
const {connections, db_connect} = new DatusInstance({
  connections: {
    local_PG: {
      adapter: "pg",
      host: "localhost",
      user: "root",
      password: "datus_integration",
      database: "datus_integration"
    },
    local_MySQL: {
      adapter: "mysql",
      host: "localhost",
      user: "root",
      password: "datus_integration",
      database: "datus_integration"
    }
  }
})

// Register a schema based on a flow type.
// See content/types/user.flow.js for notes.
connections.local_PG
  .add_schema("./content/types/user.flow.js")
  .add_schema("./content/types/thing.flow.js")

// We can relate between DBs,
// here is the definition for
// the follows relation seen in
// the user.flow.js
connections.local_MySQL
  .add_schema("./content/types/follows.flow.js")

// Connect to the database ready to rock
db_connect()
  .then(models => {
    console.log("Database(s) connected without error")
    console.log(models)
  })
  .catch(error => {
    throw error
  })
