const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },
  ingridiantes: {
    name: String,
    amount: {
      value: Number,
      metric: String,
    },
  },
});

module.exports = mongoose.model("recipe", recipeSchema);
