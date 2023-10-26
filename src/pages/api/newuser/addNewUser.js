import newUser from 'src/backend/model/newuser/newuser'
import connectMongo from 'src/backend/utils/connectMongo'

export default async function newUsers(req, res) {
  try {
    await connectMongo()
    if (req.method === 'POST') {
      let user = new newUser(req.body)
      await user.save()
      console.log('dataaaaa', user)
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
