import app from '../../app'
import { Request, Response } from 'express'
import { createUrlApiMarvel, completeUrlApiMarvel} from './api'
import { CharacterService } from '../character/character.service'
import { ComicService } from '../comic/comic.service'
import { CreatorService } from '../creator/creator.service'

class ApiController{
    async createDB(req: Request, res: Response){

        let buscaGeral = createUrlApiMarvel("events/277")

        const marvelApiGeral = await fetch(buscaGeral)
        const resposta:any = await marvelApiGeral.json();

        const listaPersonagens = resposta.data.results[0].characters.items;
        const listaCriadores = resposta.data.results[0].creators.items;
        const listaQuadrinho = resposta.data.results[0].comics.items;     
        
        for( let i = 0; i < listaPersonagens.length; i++){
            const personagemApi = await fetch(completeUrlApiMarvel(listaPersonagens[i].resourceURI))
            const resPersonagem:any = await personagemApi.json();
            const personagem = resPersonagem.data.results[0]

            const bodyPersonagem = {
                id: personagem.id,
                name: personagem.name,
                description: personagem.description,
                img: personagem.thumbnail.path + "." + personagem.thumbnail.extension,
                comics: personagem.comics.items
            }

            await new CharacterService().create(bodyPersonagem)
        }  

        for( let i = 0; i < listaCriadores.length; i++){
            const criadorApi = await fetch(completeUrlApiMarvel(listaCriadores[i].resourceURI))
            const resCriador:any = await criadorApi.json();

            const criador = resCriador.data.results[0]

            const bodyCriador = {
                id: criador.id,
                name: criador.fullName,
                img: criador.thumbnail.path + "." + criador.thumbnail.extension
            }

            await new CreatorService().create(bodyCriador)

            // console.log(criador)
        }

        for( let i = 0; i < listaQuadrinho.length; i++){
            const quadrinhoApi = await fetch(completeUrlApiMarvel(listaQuadrinho[i].resourceURI))
            const resQuadrinho:any = await quadrinhoApi.json();

            const quadrinho = resQuadrinho.data.results[0]

            const bodyQuadrinho = {
                id: quadrinho.id,
                title: quadrinho.title,
                description: quadrinho.description,
                publicationDate: quadrinho.dates[0].date,
                cover: quadrinho.thumbnail.path + '.' + quadrinho.thumbnail.extension,
                creators: quadrinho.creators.items
            }

            await new ComicService().create(bodyQuadrinho)

            // console.log(resQuadrinho.data.results[0])
        }  
       

        return res.json("Banco criado com sucesso.")
    }

}

export default new ApiController()