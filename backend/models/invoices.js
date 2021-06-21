const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./users");

const invoiceSchema = new Schema({
  createdBy: {
    type: String,
    required: true,
  },
  ivNumber: {
    type: String,
    required: true,
    unique: true,
  },
  ivDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  cName: {
    type: String,
    required: true,
  },
  cNumber: {
    type: Number,
    required: true,
  },
  cAddress: {
    type: String,
    required: true,
  },
  cEmail: {
    type: String,
    required: true,
  },

  currencyfilter: {
    type: Number,
  },
  stateFilter: {
    type: String,
    enum: ["Haryana", "Others"],
  },
  product: [
    {
      pDescription: {
        type: String,
        required: true,
      },
      pQuantity: {
        type: Number,
        default: 1,
      },
      pPrice: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
  },
});

module.exports = mongoose.model("Invoice", invoiceSchema);
