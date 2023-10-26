import Company from 'src/backend/model/companies/company'
import connectMongo from 'src/backend/utils/connectMongo'
export default async function company(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'POST') {
      let company = new Company(req.body)
      await company.save()
      console.log('added', company)
      res.status(200).json(company)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
