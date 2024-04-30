import app from "../app";
import { describe, it, expect } from "@jest/globals";
import characterModel from '../src/character/character.schema'
import * as request from 'supertest'

describe('testando endpoints personagem', ()=>{
    it('Deve inserir um personagem no banco',async () => {

        const characterMock = {
            name: "Teste personagem",
            description: "Verde",
            img: ""
        }

        const response = await request(app).post('/character').send(characterMock)
        const foundCharacter = await request(app).get(`/character/${response.body._id}`)

        expect(response.status).toEqual(200)
        expect(characterMock.name).toBe(foundCharacter?.body.name)
        expect(characterMock.description).toBe(foundCharacter?.body.description)
        expect(characterMock.img).toBe(foundCharacter?.body.img)
    })

    it('Deve contar a quantidade de personagens', async () => {
        const response = await request(app).get('/character')
        const totalCharacters = await characterModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalCharacters)
    })

    it('Deve atualizar um personagem existente', async () => {
        const newCategoryMock = {
            name: "Nova personagem",
            description: "Azul",
            img: ""
        };

        const insertResponse = await request(app).post('/character').send(newCategoryMock);

        const updatedCharacterMock = {
            name: "Categoria atualizada",
            description: "Vermelho",
            img: ""
        };

        const updateResponse = await request(app).post(`/character/${insertResponse.body._id}`).send(updatedCharacterMock);

        const foundUpdatedCharacter = await request(app).get(`/character/${insertResponse.body._id}`);
        expect(updateResponse.status).toBe(200); 
        expect(foundUpdatedCharacter.status).toBe(200); 
        expect(foundUpdatedCharacter.body.name).toBe(updatedCharacterMock.name); 
        expect(foundUpdatedCharacter.body.description).toBe(updatedCharacterMock.description);
        expect(foundUpdatedCharacter.body.img).toBe(updatedCharacterMock.img); 
    });

    it('Deve deletar um personagem existente', async () => {
        const newCategoryMock = {
            name: "Categoria para deletar",
            description: "Amarelo",
            img: ""
        };
        const insertResponse = await request(app).post('/character').send(newCategoryMock);

        const deleteResponse = await request(app).delete(`/character/${insertResponse.body._id}`);

        const foundDeletedCharacter = await characterModel.findById(insertResponse.body._id)
        expect(deleteResponse.status).toBe(200); 
        expect(foundDeletedCharacter).toBeNull; 
    });
})