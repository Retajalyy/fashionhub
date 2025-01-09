const Category = require("../models/category.models");

exports.createCategory = (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Category name is required" });
  }


  const newCategory = {
    name: req.body.name,
    description: req.body.description || "", 
  };

 
  const myCategory = Category.create(newCategory);
 res.status(201).json(myCategory);
};


