import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect('mongodb+srv://junaid:Ali123456@cluster0.niegunw.mongodb.net/')

export default connectMongo
