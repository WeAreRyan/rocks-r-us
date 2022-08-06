require("dotenv").config();
require("./config/database");

const RockType = require("./models/rockType");
const Item = require("./models/item");

(async function () {
  await RockType.deleteMany({});
  const rockTypes = await RockType.create([
    { name: "Igneous" },
    { name: "Sedimentary" },
    { name: "Metamorphic" },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Basalt",
      img: "https://i.imgur.com/Gp7qB5T.jpg",
      rockType: rockTypes[0],
      price: 0.04,
    },
    {
      name: "Sandstone",
      img: "https://i.imgur.com/ScQLa5U.jpg",
      rockType: rockTypes[1],
      price: 0.2,
    },
    {
      name: "Phyllite",
      img: "https://i.imgur.com/pSCm3xV.jpg",
      rockType: rockTypes[2],
      price: 20.0,
    },
  ]);

  console.log(items);
  process.exit();
})();
