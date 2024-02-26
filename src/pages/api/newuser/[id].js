const mongoose = require('mongoose')
import connectMongo from 'src/backend/utils/connectMongo'
import newUser from 'src/backend/model/newuser/newuser'

export default async function deleteUser(req, res) {
  try {
    const connect = await connectMongo()
    console.log('connected', connect)
    if (req.method === 'DELETE') {
      const { id } = req.query
      const userData = await newUser.findByIdAndDelete(id)
      if (!userData) {
        res.status(404).json({ msg: 'user not found' })
      } else {
        res.status(200).json({ msg: 'user deleted successfully' })
      }
    }
  } catch (error) {
    console.error('error deleting user', error)
    res.status(500).json({ msg: 'internal server error' })
  }
}
