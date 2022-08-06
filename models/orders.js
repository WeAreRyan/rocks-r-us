const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = require("./itemSchema");

const lineItemSchema = newSchema(
  {
    qty: { type: Number, default: 1 },
    item: itemSchema,
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
