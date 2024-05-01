import { Schema, model } from 'mongoose'

// Quadrinhos (Comics): Desenvolva uma entidade Comic que armazena informações sobre os quadrinhos que fazem parte da saga,
// como título, descrição, data de publicação, e capa.
const comicSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    publicationDate: Date,
    cover: String,
    idCreator: Number
},{
    timestamps: true,
})

export default model("Comic", comicSchema)
