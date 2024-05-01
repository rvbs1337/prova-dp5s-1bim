import { Schema, model } from 'mongoose'

// Personagens: Crie uma entidade Personagem para mapear os dados dos personagens que aparecem na saga escolhida.
// Inclua atributos como nome, descrição, e URL da imagem.
const characterSchema = new Schema({
    id: Number,
    name: String,
    description: String,
    img: String
},{
    timestamps: true,
})

export default model("Character", characterSchema)
