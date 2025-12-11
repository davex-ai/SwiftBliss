const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: { type: String, required: true},
    image: {type: String},
    amount: {type: Number},
    reviews: {type: String},
    remainingAmount: {type: Number},
    category: {type: string},
    price: {type: Number}    
})
module.exports = mongoose.model("Product", productSchema);