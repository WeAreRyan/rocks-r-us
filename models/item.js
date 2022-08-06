// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const itemSchema = new Schema({
//     name: { type: String, required: true },
//     price: { type: Number, required: true, default: 2 }, 
//     img: String, 
//     rockType: { type: Schema.Types.ObjectId, ref: 'rockType'}
// }, {
//     timestamps: true
// }
// )

// module.exports = itemSchema;



const mongoose = require('mongoose');

require('./rockType');

// We want to re-use the itemSchema
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);