const express = require("express");
const router = express.Router();
const invoices = require("../controller/invoice");
const { authenticateLogin } = require("../middleware/authenticateLogin");
// const { isAdmin } = require('../middleware')

router.get("/getInvoices", authenticateLogin, invoices.getInvoices);

router.get("/getInvoice", authenticateLogin, invoices.getInvoice);

router.post("/addInvoice", authenticateLogin, invoices.addInvoice);

router.put("/:id/update", authenticateLogin, invoices.updateInvoice);

router.delete("/:id", authenticateLogin, invoices.deleteInvoice);

module.exports = router;
