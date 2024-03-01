const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
//require("dotenv").config();

mongoose.connect('mongodb+srv://shopping:1KhaMCFzvWZWfMnq@cluster0.ojv5is3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('mongodb Connected succesfully!'))
  .catch(() => {
    console.log("Mongodb connection faild!")
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


