const express = require('express')
const userRouter = express.Router();
// Uncomment below if using the User model
// const User = require('../models/User');

userRouter.get("/boilerplate", (req, res) => {
  console.log("This is the /user/boilerplate endpoint.")
  res.send(200)
})

module.exports = userRouter;