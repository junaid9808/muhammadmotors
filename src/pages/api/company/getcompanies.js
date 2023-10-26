import Company from 'src/backend/model/companies/company'
import connectMongo from 'src/backend/utils/connectMongo'
export default async function companies(req, res) {
  try {
    await connectMongo()
    if (req.method === 'GET') {
      const company = await Company.find()
      res.status(200).json(company)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
