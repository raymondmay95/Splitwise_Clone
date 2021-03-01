const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Owner, Invoice } = require("../../db/models");
const db = require("../../db/models");
const router = express.Router();

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const owner = await Owner.allActivity(id);
    const groupIds = owner.map((ele) => ele.id);
    const invoices = await Invoice.getInvoiceByGroupId(groupIds);
    res.json({ invoices });
  })
);

module.exports = router;
