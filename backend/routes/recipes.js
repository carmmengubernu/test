const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Recipe List");
});

router.get("/new", (req, res) => {
  res.send("New Recipe Form");
});

router.get("/:id", (req, res) => {
  const recipeId = req.params.id;
  res.send(`Recipe Details for ID: ${recipeId}`);
});

module.exports = router;
