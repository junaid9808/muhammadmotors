import mongoose from 'mongoose'

const companySchema = mongoose.Schema(
  {
    companyName: 'String',
    productType: 'String',
    productPrice: 'String',
    serialNo: 'String',
    quantity: 'String',
    payment: 'String',
    remainingPayment: 'String'
  },
  { timestamps: true }
)
const Company = mongoose.models.Company || mongoose.model('Company', companySchema)
export default Company
