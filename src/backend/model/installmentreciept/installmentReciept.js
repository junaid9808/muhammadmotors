import mongoose from 'mongoose'
const recieptSchema = mongoose.Schema(
  {
    serialNo: 'String',
    installment: 'Number',
    tillId: 'String'
  },
  { timestamps: true }
)
const InstallmentReciept = mongoose.models.InstallmentReciept || mongoose.model('InstallmentReciept', recieptSchema)
export default InstallmentReciept
