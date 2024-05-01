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
        const character = await new CharacterService().findByName(req.params.name)

        try {
            if (character) {
                res.status(200).json(character);
            } else {
                res.status(404).json({ message: 'Nenhum  personagem com o nome procurado.' });
            }
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }

        return res.json(character)
    }
}

export default new CharacterController()