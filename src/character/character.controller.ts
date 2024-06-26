import { Request, Response } from 'express'
import { CharacterService } from './character.service'

class CharacterController{
    async create(req: Request, res: Response){
        const character = await new CharacterService().create(req.body)
        return res.json(character)
    }

    async findById(req: Request, res: Response){
        const character = await new CharacterService().findById(req.params.id)
        return res.json(character)
    }

    async findAll(req: Request, res: Response){
        const character = await new CharacterService().findAll()
        return res.json(character)
    }

    async updateById(req: Request, res: Response){
        const character = await new CharacterService().updateById(req.params.id, req.body)
        return res.json(character)
    }
    
    async deleteById(req: Request, res: Response){
        const character = await new CharacterService().deleteById(req.params.id)
        return res.json(character)
    }

    async findByName(req: Request, res: Response) {
        const character = await new CharacterService().findByName(req.params.name);
        return res.json(character);
    }

    async findComicsByCharacter(req: Request, res: Response) {
        const character = await new CharacterService().findByName(req.params.name);

        if (character) {
            const comics = character.comics.map(comic => comic.name);
            return res.json(comics);
        }
    }
}

export default new CharacterController()