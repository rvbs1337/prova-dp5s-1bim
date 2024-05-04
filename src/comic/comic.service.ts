import comicSchema from "./comic.schema";

export class ComicService {
    async create(comic: any) {
        const createComic = comicSchema.create(comic)
        return createComic
    }

    async findById(id: any) {
        const foundComic = await comicSchema.findById(id)
        return foundComic
    }

    async findAll() {
        const foundComic = await comicSchema.find()
        return foundComic
    }

    async updateById(id: any, comic: any) {
        const foundComic = await comicSchema.findByIdAndUpdate(id, comic)
        return foundComic
    }

    async deleteById(id: any) {
        const deletedComic = await comicSchema.findByIdAndDelete(id)
        return deletedComic
    }

    async findByTitle(title: string) {
        const foundComics = await comicSchema.find({ title: { $regex: title, $options: 'i' } })
        return foundComics
    }

    async findByCreator(creator: any) {
        const foundComics = await comicSchema.find({ creators: { $elemMatch: { name: { $regex: creator, $options: 'i' } } } })
        return foundComics
    }

    async findCreatorsByRole(role: any){
        const foundCreator = await comicSchema.find({ creators: { $elemMatch: { role: { $regex: role, $options: 'i' } } } }, { 'creators.$': 1 })
        return foundCreator
    }
}