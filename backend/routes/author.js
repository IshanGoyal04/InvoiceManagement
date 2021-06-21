const express = require("express");
const router = express.Router();
const authenticate = require("../controller/authenticate");


// const { isAdmin } = require('../middleware')

router.post("/signin", authenticate.postlogin);

router.post("/signup", authenticate.postregister);

module.exports = router;
