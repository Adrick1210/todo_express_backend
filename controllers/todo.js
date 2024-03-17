// DEPENDENCIES
const express = require("express");
const Todos = require("../models/Todo");
const jwt = require("jsonwebtoken");

// ROUTER OBJECT
const router = express.Router();

// middleware
const authCheck = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "unauthorized" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    req.username = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: "Forbidden" });
  }
};

// ROUTES
router.get("/", authCheck, async (req, res) => {
  try {
    res.json(await Todos.find({ username: req.username }));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", authCheck, async (req, res) => {
  try {
    req.body.username = req.username;
    req.body.isComplete = req.body.isComplete === "on" ? true : false;
    res.json(await Todos.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", authCheck, async (req, res) => {
  try {
    console.log(req.body, req.params.id);
    res.json(
      await Todos.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", authCheck, async (req, res) => {
  try {
    res.json(await Todos.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", authCheck, async (req, res) => {
  try {
    res.json(await Todos.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

// EXPORTS
module.exports = router;
