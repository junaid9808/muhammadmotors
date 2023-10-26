import bcrypt from 'bcryptjs'
import User from 'src/backend/model/user/user'
import connectMongo from 'src/backend/utils/connectMongo'
import Jwt from 'jsonwebtoken'

export default async function handler(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'POST') {
      let users = new User(req.body)

      await users.save()

      res.status(200).json(users)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
