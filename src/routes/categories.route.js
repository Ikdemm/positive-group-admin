const express = require("express");
const router = express.Router();
const Category = require("../models/category");

// Retrieving existing Categories

router.get("/", (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) return handleError(err);
    res.send(categories);
  });
});

// Creating new categories

router.post("/", (req, res) => {
  const categoryData = req.body;
  categoryData.courses = [];
  const newCategory = new Category(categoryData);
  newCategory.save((err, newCategory) => {
    if (err) return handleError(err);
    res.send(newCategory);
  });
});

router.delete("/:id", (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

module.exports = router;
