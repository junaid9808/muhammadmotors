import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect('mongodb://0.0.0.0:27017')

export default connectMongo
