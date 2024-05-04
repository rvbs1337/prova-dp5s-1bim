import app from "../app";
import { describe, it, expect } from "@jest/globals";
import creatorModel from '../src/creator/creator.schema'
import * as request from 'supertest'

describe('testando endpoints criador', ()=>{
    it('Deve inserir um criador no banco',async () => {
        const creatorMock = {
            name:"rubs1337",
            img:"amandinha1234",
        }

        const response = await request(app).post('/creator').send(creatorMock)
        const foundCreator = await creatorModel.findById(response.body._id)

        expect(creatorMock.name).toBe(foundCreator?.name)
        expect(creatorMock.img).toBe(foundCreator?.img)
    })

    it('Deve contar a quantidade de criadores', async () => {
        const response = await request(app).get('/creator')
        const totalCreators = await creatorModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalCreators)
    })

    it('Deve atualizar um criador existente', async () => {
        const creatorMock = {
            name:"rubs1337",
            role:"amandinha1234",
            comics: "rubenspereira9@hotmail.com"
        };
        const insertResponse = await request(app).post('/creator').send(creatorMock);

        const updatedCreatorMock = {
            name:"rubs1337",
            img:"amandinha1234"
        };
        const updateResponse = await request(app).post(`/creator/${insertResponse.body._id}`).send(updatedCreatorMock);

        const foundUpdatedCreator = await creatorModel.findById(insertResponse.body._id);
        expect(updateResponse.status).toBe(200);
        expect(foundUpdatedCreator?.name).toBe(updatedCreatorMock.name);
        expect(foundUpdatedCreator?.img).toBe(updatedCreatorMock.img);
    });

    it('Deve deletar um criador existente', async () => {
        const creatorMock = {
            name:"rubs1337",
            img:"amandinha1234"
        };
        const insertResponse = await request(app).post('/creator').send(creatorMock);

        const deleteResponse = await request(app).delete(`/creator/${insertResponse.body._id}`);

        const foundDeletedCreator = await creatorModel.findById(insertResponse.body._id);
        expect(deleteResponse.status).toBe(200);
        expect(foundDeletedCreator).toBeNull();
    });
})