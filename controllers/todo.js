// DEPENDENCIES
const express = require("express");
const Todos = require("../models/Todo");

// ROUTER OBJECT
const router = express.Router();

// ROUTES
router.get("/", async (req, res) => {
  try {
    res.json(await Todos.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await Todos.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    res.json(await Todos.findByIdAndUpdate(req.params.id, req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await Todos.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    res.json(await Todos.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

// EXPORTS
module.exports = router;
