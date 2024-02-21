// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT;

// APP OBJECT
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
const TodoRouter = require("./controllers/todo");

//ROUTER
app.use("/todo", TodoRouter);

// TEST
app.get("/", (req, res) => {
  res.send("Ready for todos");
});

// LISTENER
app.listen(PORT, () => console.log(`Todos are coming on Port ${PORT}`));
