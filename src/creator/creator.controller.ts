import { Request, Response } from 'express'
import { CreatorService } from './creator.service'

class CreatorController{
    async create(req: Request, res: Response){
        const creator = await new CreatorService().create(req.body)
        return res.json(creator)
    }

    async findById(req: Request, res: Response){
        const creator = await new CreatorService().findById(req.params.id)
        return res.json(creator)
    }

    async findAll(req: Request, res: Response){
        const creator = await new CreatorService().findAll()
        return res.json(creator)
    }

    async updateById(req: Request, res: Response){
        const creator = await new CreatorService().updateById(req.params.id, req.body)
        return res.json(creator)
    }
    
    async deleteById(req: Request, res: Response){
        const creator = await new CreatorService().deleteById(req.params.id)
        return res.json(creator)
    }
}

export default new CreatorController()