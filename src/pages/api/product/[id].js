import Product from 'src/backend/model/product/Products'
import connectMongo from 'src/backend/utils/connectMongo'
const mongoose = require('mongoose')

export default async function deleteProduct(req, res) {
  try {
    console.log('Request URL:', req.url)
    console.log('Request Params:', req.params)
    console.log('Request Query:', req.query)
    // Establish MongoDB connection
    await connectMongo()
    console.log('connected')

    if (req.method === 'DELETE') {
      const {
        query: { id }
      } = req
      console.log('id', id)

      // Use the ID from the URL path to delete the product
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
