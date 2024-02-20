import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  producttype: String,
  price: Number,
  model: String,
  pruchasedate: String,
  engineno: String,
  frameno: String,
  chassieno: String
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)
export default Product
