// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const TodoRouter = require("./controllers/todo");
const User = require("./models/User")
// const UserRouter = require("./controllers/user");

// APP OBJECT
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//ROUTER
app.use("/todos", TodoRouter);

// auth routes 
//Signup
app.post("/signup", async (req, res) => {
  try {
    let { username, password } = req.body;
    password = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const user = await User.create({ username, password });
    // console.log(user);
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ err });
  }
});

// login
app.post("/login", async (req, res) => {
  let { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Invalid Credentials" });
  }
  const token = jwt.sign({ userId: user.id }, process.env.SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

// TEST
app.get("/", (req, res) => {
  res.send("Ready for todos");
});

// LISTENER
app.listen(PORT, () => console.log(`Todos are coming on Port ${PORT}`));
