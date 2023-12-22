import connectMongo from 'src/backend/utils/connectMongo'
import InstallmentReciept from 'src/backend/model/installmentreciept/installmentReciept'


export default async function getInstallments(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'POST') {
      const byIdCardInstallments = 
      await InstallmentReciept.find({serialNo:req.body.serialNo})
      console.log('id card number', byIdCardInstallments)
      res.status(200).json(byIdCardInstallments)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}