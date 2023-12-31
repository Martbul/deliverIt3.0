const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
   fullname: String,
   order: String,
   address: String,
   dayForDelivery:String,
timeForDelivery:String,
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;