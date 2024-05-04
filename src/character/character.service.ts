import characterSchema from "./character.schema";

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
        return foundCharacter
    }

    async updateById(id: any, character: any){
        const foundCharacter = await characterSchema.findByIdAndUpdate(id, character)
        return foundCharacter
    }

    async deleteById(id: any){
        const deletedCharacter = await characterSchema.findByIdAndDelete(id)
        return deletedCharacter
    }

    async findByName(name: any) {
        const foundCharacter = await characterSchema.findOne({ name: name });
        return foundCharacter;
    }

    async findComicsByName(name: any) {
        const foundComics = await characterSchema.find({ name: name });
        return foundComics;
    }
}