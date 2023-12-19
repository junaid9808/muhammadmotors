import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect('mongodb+srv://mobogamz:Pakistan2023@cluster0.ohkriv7.mongodb.net/')

export default connectMongo
