import connectMongo from 'src/backend/utils/connectMongo'
import InstallmentReciept from 'src/backend/model/installmentreciept/installmentReciept'
import newUser from 'src/backend/model/newuser/newuser'

export default async function installment(req, res) {
  try {
    await connectMongo()
    console.log('connected')
    if (req.method === 'POST') {
      let installment = new InstallmentReciept(req.body)
      let updateDues = await newUser.findOne({idCradNumber:req.body.serialNo});
      updateDues.paidDues += installment.installment;
      updateDues.dues -= installment.installment;
      await updateDues.save()
      await installment.save()
      // console.log('added', installment)
      res.status(200).json(installment)
    }
  } catch (error) {
    res.status(500).json(error)
  }
}