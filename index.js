const app = require('./app');

const PORT = 8000;

app.listen(PORT, async (err) => {
    if (!err) {
      console.log(`Server successfully started on port: ${PORT}`);
      await mysqldb.connectToSqlDb();
    } else {
      console.log("Failed to start server");
    }
  });