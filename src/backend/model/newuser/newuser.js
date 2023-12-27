import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  totelPayment: 'String',
  advance: 'String',
  dues: 'String',
  paidDues: 'String',
  date: 'String',
  name: 'String',
  address: 'String',
  idCradNumber: 'String',
  phoneNo: 'String',
  signature: 'String',
  thumb: 'String',
  guarantorName: 'String',
  guarantorAddress: 'String',
  guarantorIdCrad: 'String',
  guarantorPhoneNo: 'String',
  guarantorSignature: 'String',
  guarantorThumb: 'String',
  engineNo: 'String',
  frameNo: 'String',
  motorcycleType: 'String',
  color: 'String'
})
const newUser = mongoose.models.newUser || mongoose.model('newUser', userSchema)
export default newUser
