import Product from 'src/backend/model/product/Products'
import connectMongo from 'src/backend/utils/connectMongo'

export default async function products(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'GET') {
      const product = await Product.find()
      res.status(200).json(product)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
