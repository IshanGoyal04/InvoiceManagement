const Invoice = require("../models/invoices");

module.exports.getInvoices = (req, res) => {
  Invoice.find()
    .then((invoices) => res.json(invoices))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.addInvoice = (req, res) => {
  const createdBy = req.body.createdBy;
  const ivNumber = req.body.ivNumber;
  const ivDate = Date.parse(req.body.ivDate);
  const cName = req.body.cName;
  const cNumber = req.body.cNumber;
  const cAddress = req.body.cAddress;
  const cEmail = req.body.cEmail;
  const currencyfilter = req.body.currencyfilter;
  const stateFilter = req.body.stateFilter;
  let product = [];
  for (let i of req.body.product) {
    const pdescription = i.pdescription;
    const pQuantity = i.pQuantity;
    const pPrice = i.pPrice;
    const amount = i.amount;
    let object = {
      pdescription: pdescription,
      pQuantity: pQuantity,
      pPrice: pPrice,
      amount: amount,
    };
    product.push(object);
  }

  const newInvoice = new Invoice({
    createdBy,
    ivNumber,
    ivDate,
    cName,
    cNumber,
    cAddress,
    cEmail,
    currencyfilter,
    stateFilter,
    product,
  });
  newInvoice
    .save()
    .then(() => res.json("Invoice added"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.getInvoice = (req, res) => {
  Invoice.findById()
    .then((invoice) => res.json(invoice))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.deleteInvoice = (req, res) => {
  Invoice.findByIdAndDelete(req.params.id)
    .then(() => res.json("Invoice Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports.updateInvoice = (req, res) => {
  Invoice.findById(req.params.id)
    .then((invoice) => {
      invoice.createdBy = req.body.createdBy;
      invoice.ivNumber = req.body.ivNumber;
      invoice.ivDate = Date.parse(req.body.ivDate);
      invoice.cName = req.body.cName;
      invoice.cNumber = req.body.cNumber;
      invoice.cAddress = req.body.cAddress;
      invoice.cEmail = req.body.cEmail;
      invoice.currencyfilter = req.body.currencyfilter;
      invoice.stateFilter = req.body.stateFilter;

      invoice
        .save()
        .then(() => res.json("Invoice Updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

