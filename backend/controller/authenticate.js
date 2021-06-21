const User = require("../models/users");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

module.exports.postregister = async (req, res) => {
  var { name, email, password, designation, department, number } = req.body;
  console.log(req.body);
  if (!email || !password || !name || !designation || !department || !number) {
    return res.status(422).json({ error: "Enter all the details" });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "User already exists with that email" });
    }
    bcrypt
      .hash(password, 15)
      .then((hashedpw) => {
        const user = new User({
          name,
          email,
          password: hashedpw,
          designation,
          department,
          number,
        });
        user
          .save()
          .then((user) => {
            return res
              .status(200)
              .json({ message: "User created Succesfully" });
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

module.exports.postlogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please provide email or password" });
  }
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res
          .status(422)
          .json({ error: "User doesnot exist with that email" });
      }
      bcrypt.compare(password, savedUser.password).then((match) => {
        if (!match) {
          return res.status(400).json({ error: "Invalid email or passowrd" });
        }
        const token = jwt.sign({ id: savedUser._id }, JWT_SECRET);
        const { _id, name } = savedUser;
        return res.status(200).json({
          token,
          user: { _id, name },
          message: "Loggen In Succesfully",
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
