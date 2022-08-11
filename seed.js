require("dotenv").config();
require("./config/database");

const RockType = require("./models/rockType");
const Item = require("./models/item");
const Order = require("./models/order");

(async function () {

  await Order.deleteMany({});
  await RockType.deleteMany({});
  const rockTypes = await RockType.create([
    { name: "Igneous" },
    { name: "Sedimentary" },
    { name: "Metamorphic" },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    // Igneous Rocks
    {
      name: "Basalt",
      img: "https://i.imgur.com/Gp7qB5T.jpg",
      rockType: rockTypes[0],
      price: 0.04,
    },
    {
      name: "Gabbro",
      img: "https://i.imgur.com/suJTLau.jpg",
      rockType: rockTypes[0],
      price: 1.58,
    },
    {
      name: "Granite",
      img: "https://i.imgur.com/j3EKJqW.jpg",
      rockType: rockTypes[0],
      price: 0.02,
    },
    {
      name: "Diorite",
      img: "https://i.imgur.com/MZ5Qpq4.jpg",
      rockType: rockTypes[0],
      price: 0.06,
    },
    {
      name: "Andesite",
      img: "https://i.imgur.com/YhAxYAW.jpg",
      rockType: rockTypes[0],
      price: 8.88,
    },
    {
      name: "Obsidian",
      img: "https://i.imgur.com/2RI8S6G.jpg",
      rockType: rockTypes[0],
      price: 5.12,
    },
    {
      name: "Pegmatite",
      img: "https://i.imgur.com/PpsKSJT.jpg",
      rockType: rockTypes[0],
      price: 3.25,
    },
    {
      name: "Pumice",
      img: "https://i.imgur.com/zIhxhCd.jpg",
      rockType: rockTypes[0],
      price: 0.05,
    },
    {
      name: "Peridotite",
      img: "https://i.imgur.com/FF9NouE.jpg",
      rockType: rockTypes[0],
      price: 10.97,
    },
    {
      name: "Rhyolite",
      img: "https://i.imgur.com/txaMSEW.jpg",
      rockType: rockTypes[0],
      price: 9.85,
    },

    // Sedimentary Rocks
    {
      name: "Sandstone",
      img: "https://i.imgur.com/ScQLa5U.jpg",
      rockType: rockTypes[1],
      price: 0.2,
    },
    {
      name: "Arkose",
      img: "https://i.imgur.com/w4wzAm9.jpg",
      rockType: rockTypes[1],
      price: 12.35,
    },
    {
      name: "Breccia",
      img: "https://i.imgur.com/yvE3QXw.jpg",
      rockType: rockTypes[1],
      price: 8.65,
    },
    {
      name: "Chert",
      img: "https://i.imgur.com/jxdLqIb.jpg",
      rockType: rockTypes[1],
      price: 0.02,
    },
    {
      name: "Clay Stone",
      img: "https://i.imgur.com/y08veiF.jpg",
      rockType: rockTypes[1],
      price: 0.01,
    },
    {
      name: "Coal",
      img: "https://i.imgur.com/ObxhmOy.jpg",
      rockType: rockTypes[1],
      price: 1.62,
    },
    {
      name: "Conglomerate",
      img: "https://i.imgur.com/6n1G4Fy.jpg",
      rockType: rockTypes[1],
      price: 0.03,
    },
    {
      name: "Dolomite",
      img: "https://i.imgur.com/4tlmRfi.jpg",
      rockType: rockTypes[1],
      price: 0.02,
    },
    {
      name: "Evaporite",
      img: "https://i.imgur.com/QyCwauE.png",
      rockType: rockTypes[1],
      price: 0.03,
    },
    {
      name: "Greywacke",
      img: "https://i.imgur.com/Ft7bZZE.jpg",
      rockType: rockTypes[1],
      price: 0.02,
    },
    {
      name: "Ironstone",
      img: "https://i.imgur.com/QC2JPzy.png",
      rockType: rockTypes[1],
      price: 0.06,
    },
    // Metamorphic Rocks
    {
      name: "Phyllite",
      img: "https://i.imgur.com/pSCm3xV.jpg",
      rockType: rockTypes[2],
      price: 20.0,
    },
    {
      name: "Soapstone",
      img: "https://i.imgur.com/yfye9QZ.png",
      rockType: rockTypes[2],
      price: 22.0,
    },
    {
      name: "Marble",
      img: "https://i.imgur.com/osUc3U6.jpg",
      rockType: rockTypes[2],
      price: 6.28,
    },
    {
      name: "Amphibolite",
      img: "https://i.imgur.com/RaIPeJ0.jpg",
      rockType: rockTypes[2],
      price: 2.7,
    },
    {
      name: "Slate",
      img: "https://i.imgur.com/IdVadQQ.jpg",
      rockType: rockTypes[2],
      price: 7.29,
    },
    {
      name: "Schist",
      img: "https://i.imgur.com/NfTSg79.jpg",
      rockType: rockTypes[2],
      price: 0.18,
    },
    {
      name: "Hornfels",
      img: "https://i.imgur.com/9UXPv5r.jpg",
      rockType: rockTypes[2],
      price: 2.18,
    },
    {
      name: "Gneiss",
      img: "https://i.imgur.com/CLjCQQc.jpg",
      rockType: rockTypes[2],
      price: 2.47,
    },
    {
      name: "Hornblende",
      img: "https://i.imgur.com/3y5Jb77.png",
      rockType: rockTypes[2],
      price: 0.23,
    },
    {
      name: "Eclogite",
      img: "https://i.imgur.com/sD6eQql.jpg",
      rockType: rockTypes[2],
      price: 16.87,
    },
  ]);

  console.log(items);
  process.exit();
})();
