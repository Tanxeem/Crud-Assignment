const express = require ('express');

const {home, createUser, getUser, deleteUser, editUser} = require("../controllers/userController.js")

const router = express.Router();

router.get("/", home);

router.post("/createuser", createUser);

router.get("/getusers", getUser);

router.put("/edituser/:id", editUser);

router.delete("/deleteusers/:id", deleteUser)

module.exports = router;