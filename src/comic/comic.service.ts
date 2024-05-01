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
        const foundComics = await comicSchema.find({ title: { $regex: title, $options: 'i' } });
        return foundComics;
    }
}