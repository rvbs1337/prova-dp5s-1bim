import { Request, Response } from 'express'
import createUrlApiMarvel from './api'

class ApiController{
    async createDB(req: Request, res: Response){

        let buscaGeral = createUrlApiMarvel("events/277")

        const marvelApiGeral = await fetch(buscaGeral)
        const resposta:any = await marvelApiGeral.json();

        console.log(resposta.data.results[0].characters.items)
        // resposta.data.results.characters.some((element:any) =>{
        //     console.log(element) oi mandina
        // })

        resposta.data.results[0].characters.items.some((element:any) =>{
            console.log(element)
        })

    }

}

export default new ApiController()