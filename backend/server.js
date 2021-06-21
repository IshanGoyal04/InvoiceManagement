//import express from "express";
//import Data from "./Data";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { DB_URL } = require("./config");
const app = express();
const userRoutes = require("./routes/users");
const invoiceRoutes = require("./routes/invoices");
const authenticateRoutes = require("./routes/author");

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTED TO MONGOOSE");
  })
  .catch(() => {
    console.log("ERROR");
  });

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  next();
});

app.use("/", authenticateRoutes);

app.use("/", userRoutes);
app.use("/", invoiceRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//const app = express();
//
//app.get("/api/invoices", (req, res) => {
//  res.send(Data.invoices);
//});
//
//app.get("/api/invoices/:id", (req, res) => {
//  const invoiceId = req.params.id;
//  const invoice = Data.invoices.find((x) => x._id === invoiceId);
//  if (invoice) {
//    res.send(invoice);
//  } else {
//    res.status(404).send({ msg: "invoice not find" });
//  }
//});
//
//app.listen(4000, () => {
//  console.log("Server started at port 4000");
//});

/********* */
