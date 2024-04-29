import characterSchema from "./character.schema";
import createUrlApiMarvel from "../api/api";

export class CharacterService{
    async create(character: any){
        const createCharacter = characterSchema.create(character)
        return createCharacter
    }

    async findById(id: any){
        const foundCharacter = await characterSchema.findById(id)
        return foundCharacter
    }

    async findAll(){
        const foundCharacter = await characterSchema.find()

        createUrlApiMarvel("events/277/characters") //EXEMPLO DE USO DA FUNCAO

        return createUrlApiMarvel("events/277/characters")
    }

    async updateById(id: any, character: any){
        const foundCharacter = await characterSchema.findByIdAndUpdate(id, character)
        return foundCharacter
    }

    async deleteById(id: any){
        const deletedCharacter = await characterSchema.findByIdAndDelete(id)
        return deletedCharacter
    }
}