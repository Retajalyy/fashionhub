const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },{
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);
const Category = mongoose.model('Category',categorySchema);
module.exports = Category;
