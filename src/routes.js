const express = require("express");

const router = express.Router();

const UserController = require("./controllers/userController");

//Login
router.post("/login", UserController.verifyUser);

module.exports = router;
