import app from "../app";
import request from 'supertest'

describe("Deve testar as criacao do banco",()=>{
    it('deve testar as criacao do banco', async () => {
        const response = await request(app).get('/createDB')

        expect(response.status).toEqual(200)
        expect(response.body).toEqual("Banco criado com sucesso.")
    }, 60000)

})