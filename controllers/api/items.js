const Item = require("../../models/item");

module.exports = {
  index,
  show,
};

async function index(req, res) {
  // populate rock type on return
  const items = await Item.find({}).sort("name").populate("rockType").exec();
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
