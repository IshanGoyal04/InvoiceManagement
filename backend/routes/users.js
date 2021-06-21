const express = require("express");
const router = express.Router();
const users = require("../controller/user");
const { authenticateLogin } = require("../middleware/authenticateLogin");

router.get("/getUsers", authenticateLogin, users.getUsers);

router.put("/:id/update", authenticateLogin, users.updateUser);

router.delete("/:id", authenticateLogin, users.deleteUser);

//router.post("/signin", users.postlogin);

//router.get("/", (req, res) => {
//  User.find() //find method is returning the promise
//    .then((users) => res.json(users)) //here we are returning all the users in json format
//    .catch((err) => res.status(400).json("Error: " + err));
//});

//router.post("/add", async (req, res) => {
//  const { name, address, email, password, designation, number, department } =
//    req.body;
//  const newUser = await new User({
//    name,
//    address,
//    email,
//    designation,
//    number,
//    department,
//    password,
//  });
//
//  newUser
//    .save()
//    .then(() => res.json("User added!"))
//    .catch((err) => res.status(400).json("Error: " + err));
//});
//
//router.get("/:id", (req, res) => {
//  User.findById(req.params.id)
//    .then((user) => res.json(user))
//    .catch((err) => res.status(400).json("Error: " + err));
//});
//
//router.delete("/:id", (req, res) => {
//  User.findByIdAndDelete(req.params.id)
//    .then(() => res.json("User Deleted"))
//    .catch((err) => res.status(400).json("Error: " + err));
//});
//
//router.post("/update/:id", (req, res) => {
//  User.findById(req.params.id)
//    .then((user) => {
//      user.name = req.body.name;
//      user.address = req.body.address;
//      user.email = req.body.email;
//      user.designation = req.body.designation;
//      user.number = req.body.number;
//      user.department = req.body.department;
//
//      user
//        .save()
//        .then(() => res.json("User Updated!"))
//        .catch((err) => res.status(400).json("Error: " + err));
//    })
//    .catch((err) => res.status(400).json("Error: " + err));
//});
//

module.exports = router;
