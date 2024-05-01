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
        try {
            const foundCharacter = await characterSchema.findOne({ name: name });
            return foundCharacter;
        } catch (error: any) {
            throw new Error('Erro ao buscar personagem com nome: ' + error.message);
        }
    }
}