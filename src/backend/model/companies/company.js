import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
  {
    companyName: 'String',
    productType: 'String',
    productPrice: 'Number',
    serialNo: 'String',
    quantity: 'Number',
    payment: 'Number',
    remainingPayment: 'Number'
  },
  { timestamps: true }
)
const Company = mongoose.models.Company || mongoose.model('Company', companySchema)
export default Company
