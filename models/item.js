const mongoose = require("mongoose");

require("./rockType");

const itemSchema = require("./itemSchema");

module.exports = mongoose.model("Item", itemSchema);
