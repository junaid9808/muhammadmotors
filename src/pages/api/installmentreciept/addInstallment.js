import connectMongo from 'src/backend/utils/connectMongo'
import InstallmentReciept from 'src/backend/model/installmentreciept/installmentReciept'
import newUser from 'src/backend/model/newuser/newuser'

export default async function installment(req, res) {
  try {
    const connect = await connectMongo()
    console.log('connected', connect.connection.host)
    if (req.method === 'POST') {
      console.log('fdghjk')
      let installment = new InstallmentReciept(req.body)
      // console.log('installmentssss', installment)
      let updateDues = await newUser.findOne({ idCradNumber: req.body.serialNo })
      console.log('updateeeeeeee', updateDues)
      updateDues.paidDues += installment.installment
      updateDues.dues -= installment.installment

      await updateDues.save()
      await installment.save()
      console.log('added', installment)
      res.status(200).json(installment)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}
