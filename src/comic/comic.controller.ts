import { Request, Response } from 'express'
import { ComicService } from './comic.service'

class ComicController{
    async create(req: Request, res: Response){
        const comic = await new ComicService().create(req.body)
        return res.json(comic)
    }

    async findById(req: Request, res: Response){
        const comic = await new ComicService().findById(req.params.id)
        return res.json(comic)
    }

    async findAll(req: Request, res: Response){
        const comic = await new ComicService().findAll()
        return res.json(comic)
    }

    async updateById(req: Request, res: Response){
        const comic = await new ComicService().updateById(req.params.id, req.body)
        return res.json(comic)
    }
    
    async deleteById(req: Request, res: Response){
        const comic = await new ComicService().deleteById(req.params.id)
        return res.json(comic)
    }
}

export default new ComicController()