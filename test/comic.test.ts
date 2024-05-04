import request from 'supertest';
import app from '../app';


/* describe('testando endpoints comics', ()=>{
    it('Deve inserir um comic no banco',async () => {

        const comicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: Date(),
            cover: ""
        }

        const response = await request(app).post('/comic').send(comicMock)
        const foundComic = await comicModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(comicMock.title).toBe(foundComic?.title)
        expect(comicMock.description).toBe(foundComic?.description)
        expect(comicMock.publicationDate).toStrictEqual(foundComic?.publicationDate)
        expect(comicMock.cover).toBe(foundComic?.cover)
    })

    it('Deve contar a quantidade de comics', async () => {
        const response = await request(app).get('/comic')
        const totalComics = await comicModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalComics)
    })

    it('Deve atualizar uma comic existente', async () => {
        const comicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: Date(),
            cover: ""
        };
        const insertResponse = await request(app).post('/comic').send(comicMock);

        const updatedComicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: Date(),
            cover: ""
        };
        const updateResponse = await request(app).post(`/comic/${insertResponse.body._id}`).send(updatedComicMock);

        const foundUpdatedComic = await comicModel.findById(insertResponse.body._id);

        expect(updateResponse.status).toBe(200);
        expect(foundUpdatedComic?.title).toBe(updatedComicMock.title);
        expect(foundUpdatedComic?.description).toBe(updatedComicMock.description);
        expect(foundUpdatedComic?.publicationDate).toStrictEqual(updatedComicMock.publicationDate);
        expect(foundUpdatedComic?.cover).toBe(updatedComicMock.cover);
    });

    it('Deve deletar uma comic existente', async () => {
        const comicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: Date(),
            cover: ""
        };
        const insertResponse = await request(app).post('/comic').send(comicMock);

        const deleteResponse = await request(app).delete(`/comic/${insertResponse.body._id}`);

        const foundDeletedComic = await comicModel.findById(insertResponse.body._id);
        expect(deleteResponse.status).toBe(200);
        expect(foundDeletedComic).toBeNull();
    });
}) */

describe('Comic Endpoints', () => {
    let comicId: string;

    it('should create a new comic', async () => {
        const res = await request(app)
            .post('/comic')
            .send({
                title: 'Test Comic',
                description: 'Test Description',
                publicationDate: '2024-05-01',
                cover: 'test-cover.jpg',
                creators: [{ name: 'Test Creator', role: 'Writer' }]
            });
        expect(res.statusCode).toEqual(200);
        comicId = res.body._id;
    });

    it('should fetch a comic by ID', async () => {
        const res = await request(app).get(`/comic/${comicId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Test Comic');
    });

    it('should fetch all comics', async () => {
        const res = await request(app).get('/comic');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should update a comic by ID', async () => {
        const res = await request(app)
            .post(`/comic/${comicId}`)
            .send({ title: 'Updated Comic Title' });
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual('Updated Comic Title');
    });

    it('should delete a comic by ID', async () => {
        const res = await request(app).delete(`/comic/${comicId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body._id).toEqual(comicId);
    });
});