import Company from 'src/backend/model/companies/company'
const mongoose = require('mongoose')
import connectMongo from 'src/backend/utils/connectMongo'

export default async function deleteCompany(req, res) {
  try {
    const connect = await connectMongo()
    console.log('connected', connect)
    if (req.method === 'DELETE') {
      const { id } = req.query
      const data = await Company.findByIdAndDelete(id)
      if (!data) {
        res.status(404).json({ msg: 'company not found' })
      } else {
        res.status(200).json({ msg: 'company delete successfully' })
      }
    }
  } catch (error) {
    console.log('error deleting company', error)
    res.status(500).json({ msg: 'internal server error' })
  }
}
