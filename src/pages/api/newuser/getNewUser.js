import newUser from 'src/backend/model/newuser/newuser'
import connectMongo from 'src/backend/utils/connectMongo'

export default async function getUser(req, res) {
  try {
    await connectMongo()
    if (req.method === 'GET') {
      const user = await newUser.find()
      console.log('data', user)
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
