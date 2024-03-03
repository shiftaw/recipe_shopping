const express = require('express')
const Recipe = require('../models/recipe.model')
const router = express.Router()



router.get("/", getRecipes);