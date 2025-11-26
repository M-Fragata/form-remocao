import mongoose from "mongoose";

const RemocaoSchema = mongoose.Schema({
    mail: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    matricula: {
        type: Number,
        require: true
    },
    readaptado: {
        type: String,
        require: true
    },
    cargo: {
        type: String,
        require: true
    }
})

export const Remocao = mongoose.model("Remocao", RemocaoSchema)