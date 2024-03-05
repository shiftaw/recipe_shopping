const express = require("express");

const router = express.Router();
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../Controllers/recipe.controller");

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/", createRecipe);

//update a recipe
router.put("/:id", updateRecipe);

//delete a recipe
router.delete("/:id", deleteRecipe);

module.exports = router;

