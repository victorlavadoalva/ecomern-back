const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "cant be blanck"],
    },
    description: {
      type: String,
      required: [true, "cant be blanck"],
    },
    price: {
      type: String,
      required: [true, "cant be blanck"],
    },
    category: {
      type: String,
      required: [true, "cant be blanck"],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false }
);
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
