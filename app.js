const app = require("express")(); // initialize application
const routes = require("./routes");

app.use(express.json()); // parse json request body
app.use(express.urlencoded({ extended: true })); // parse urlencoded request body

// localhost:3000/
app.get("/", (req, res) => {
  res.status(200).send("welcome to my ticket booking api");
});

app.use("/", routes);
module.exports = app;