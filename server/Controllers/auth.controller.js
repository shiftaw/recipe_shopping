const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register =  (req, res, _next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user =  new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.hashedpass,
      });
      user
        .save()
        .then((_user) => {
          res.json({
            message: "user added successfully!",
          });
        })
        .catch((_error) => {
          res.json({
            message: "An error occured",
          });
        });
  });
  
}

module.exports = { register };
