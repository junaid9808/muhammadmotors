import Product from 'src/backend/model/product/Products'
import connectMongo from 'src/backend/utils/connectMongo'
const mongoose = require('mongoose')

export default async function deleteProduct(req, res) {
  try {
    await connectMongo()
    console.log('connected')

    if (req.method === 'DELETE') {
      const { id } = req.query
      console.log('fghhjg', id)
      const deletedProduct = await Product.findByIdAndDelete(id)

      if (!deletedProduct) {
        return res.status(404).json({ msg: 'Product not found' })
      }

      return res.status(200).json({ msg: 'Product deleted successfully' })
    }
  } catch (error) {
    console.error('Error deleting product:', error)
    res.status(500).json({ msg: 'Internal server error' })
  }
}
