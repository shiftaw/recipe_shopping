const mongoose = require("mongoose");

const recipeSchema = mongoose.Schema({
  Ingredent:
  {
    _id:Number,
    name: String,
    metrics: String,
  },

  Recipe:
 { 
   name:String,
   description: String,
   metrics: String,

  ingredients: [
    {
      id:Number,
      amount: Number
    },
    {
      id:Number,
      amount: Number
    }
  ]}
});

module.exports = mongoose.model("recipe.model", recipeSchema);
