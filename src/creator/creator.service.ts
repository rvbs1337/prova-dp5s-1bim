import creatorSchema from "./creator.schema";

export class CreatorService{
    async create(user: any){
        const createUser = creatorSchema.create(user)
        return createUser
    }

    async findById(id: any){
        const foundUser = await creatorSchema.findById(id)
        return foundUser
    }

    async findAll(){
        const foundUser = await creatorSchema.find()
        return foundUser
    }

    async updateById(id: any, user: any){
        const foundUser = await creatorSchema.findByIdAndUpdate(id, user)
        return foundUser
    }

    async deleteById(id: any){
        const deletedUser = await creatorSchema.findByIdAndDelete(id)
        return deletedUser
    }
}