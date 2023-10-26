import connectMongo from 'src/backend/utils/connectMongo'
import InstallmentReciept from 'src/backend/model/installmentreciept/installmentReciept'

export default async function installment(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'POST') {
      let installment = new InstallmentReciept(req.body)
      await installment.save()
      console.log('added', installment)
      res.status(200).json(installment)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
