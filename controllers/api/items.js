const Item = require("../../models/item");

module.exports = {
  index,
  show
};

async function index(req, res) {
  console.log('items index func')
  const items = await Item.find({}).sort('name').populate('rockType').exec();
  // .populate('rockType') - MAY BE NEEDED
  res.json(items);
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}
