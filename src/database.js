import mongoose from 'mongoose'

export const dataBase = async () => {
    const uri = "mongodb+srv://Fragata:m4th3us1@cluster0.bdixruu.mongodb.net/?appName=Cluster0"

    try {
        await mongoose.connect(uri)
        console.log("Mongoose entrou")
    } catch (error) {
        console.log(error)
    }
}