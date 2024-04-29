import { Schema, model } from 'mongoose'

// Criadores: Crie uma entidade Criador que represente os criadores dos quadrinhos (roteiristas, desenhistas, etc.), 
// incluindo nome, função, e quais quadrinhos contribuíram.
const creatorSchema = new Schema({
    name: String,
    role: String,
    comics: String
},{
    timestamps: true,
})

export default model("Creator", creatorSchema)