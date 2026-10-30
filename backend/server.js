const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Here");
  res.send("Home Page");
});

const usersRouter = require("./routes/users");
const recipesRouter = require("./routes/recipes");

app.use("/users", usersRouter);
app.use("/recipes", recipesRouter);

app.listen(3000);
