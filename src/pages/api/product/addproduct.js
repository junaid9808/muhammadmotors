import Product from 'src/backend/model/product/Products'
import connectMongo from 'src/backend/utils/connectMongo'

export default async function handler(req, res) {
  try {
    const connected = await connectMongo()
    console.log('connecteddddd', connected.connection)
    if (req.method === 'POST') {
      let product = new Product(req.body)
      await product.save()
      console.log('ashdghsd', product)
      res.status(200).json(product)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
