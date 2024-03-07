const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/recipe.model");
const recipeRoute = require("./Routes/recipe.route.js");
const AuthRoute = require('./Routes/aut.route.js')
const app = express();
const port = 3000;
//require("dotenv").config();

//middleware
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://shopping:1KhaMCFzvWZWfMnq@cluster0.ojv5is3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongodb Connected succesfully!"))
  .catch(() => {
    console.log("Mongodb connection faild!");
  });

  
  

//  routes
app.use("/api/recipes", recipeRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/api', AuthRoute)
