const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe.model");
const app = express();
const port = 3000;
//require("dotenv").config();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://shopping:1KhaMCFzvWZWfMnq@cluster0.ojv5is3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongodb Connected succesfully!"))
  .catch(() => {
    console.log("Mongodb connection faild!");
  });

  app.get("/api/recipes", async (req, res) => {
    try {
      const recipe = await Recipe.find({});
      res.status(200).json(recipe);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

app.get("/api/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/recipes", async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update the recipe

app.put("/api/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body);

    if (!recipe) {
      return res.status(404).json({ message: "recipe found" });
    }
    const updatedRecipe = await Recipe.findById(id);
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete
app.delete("/api/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findByIdAndDelete(id);
    if (!recipe) {
      return res.status(404).json({ message: "recipe not found" });
    }
    res.status(200).json({ message: " recipe deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
