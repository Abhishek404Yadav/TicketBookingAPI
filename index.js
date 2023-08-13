const app = require('./app');
const config = require("./config/config");
const mysqldb = require("./config/mysqldb");

const PORT = config.port;

app.listen(PORT, async (err) => {
    if (!err) {
      console.log(`Server successfully started on port: ${PORT}`);
      await mysqldb.connectToSqlDb();
    } else {
      console.log("Failed to start server");
    }
  });