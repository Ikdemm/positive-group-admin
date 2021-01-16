const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.post('/', (req, res) => {
    const categoryData = {
        name: req.body.name,
        description: req.body.description,
        courses: []
    }
    const newCategory = new Category(categoryData);
    newCategory.save((err, newCategory) => {
        if (err) return handleError(err);
        res.send(newCategory)
    })
})

module.exports = router;