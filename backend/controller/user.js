const User = require("../models/users");

module.exports.getUsers = (req, res) => {
  User.find() //find method is returning the promise
    .then((users) => res.json(users)) //here we are returning all the users in json format
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((user) => {
      user.name = req.body.name;
      user.email = req.body.email;
      user.designation = req.body.designation;
      user.number = req.body.number;
      user.department = req.body.department;

      user
        .save()
        .then(() => res.json("User Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
};
