import request from 'supertest';
import comicModel from '../src/comic/comic.schema'
import app from '../app';


describe('testando endpoints comics', () => {
    it('Deve inserir um comic no banco', async () => {
        const publicationDate = new Date();

        const comicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: publicationDate,
            cover: ""
        }

        const response = await request(app).post('/comic').send(comicMock)
        const foundComic = await comicModel.findById(response.body._id)

        expect(response.status).toEqual(200)
        expect(comicMock.title).toBe(foundComic?.title)
        expect(comicMock.description).toBe(foundComic?.description)
        expect(comicMock.publicationDate.toISOString()).toStrictEqual(foundComic?.publicationDate?.toISOString())
        expect(comicMock.cover).toBe(foundComic?.cover)
    })

    it('Deve contar a quantidade de comics', async () => {
        const response = await request(app).get('/comic')
        const totalComics = await comicModel.countDocuments()

        expect(response.status).toEqual(200)
        expect(response.body.length).toEqual(totalComics)
    })

    it('Deve atualizar uma comic existente', async () => {
        const publicationDate = new Date();

        const comicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: publicationDate,
            cover: ""
        };
        const insertResponse = await request(app).post('/comic').send(comicMock);

        const updatedComicMock = {
            title: "Tarefa teste 1",
            description: "teste de insercao 1",
            publicationDate: publicationDate,
            cover: ""
        };
        const updateResponse = await request(app).post(`/comic/${insertResponse.body._id}`).send(updatedComicMock);

        const foundUpdatedComic = await comicModel.findById(insertResponse.body._id);

        expect(updateResponse.status).toBe(200);
        expect(foundUpdatedComic?.title).toBe(updatedComicMock.title);
        expect(foundUpdatedComic?.description).toBe(updatedComicMock.description);
        expect(foundUpdatedComic?.publicationDate?.toISOString()).toStrictEqual(updatedComicMock.publicationDate.toISOString());
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

    it('Deve encontrar uma comic por um pedaço do titulo', async () => {
        const titulo = "HEROES FOR HIRE VOL. 3: WORLD WAR HULK TPB"
        const response = await request(app).get(`/comic/titulo/${titulo}`)

        expect(response.status).toEqual(200)
        expect(response.body[0].title).toContain(titulo)
    })

    it('Deve encontrar as comics por um pedaço do nome de um Criador', async () => {
        const nome = "Tom"
        const response = await request(app).get(`/comic/creator/${nome}`)

        expect(response.status).toEqual(200)
        expect(response.body[0].title).toBe("Avengers: The Initiative (2007) #4")
    })

    // routes.get('/comic/creator/role/:role', comicController.findCreatorsByRole)
    it('Deve encontrar as comics por um pedaço do nome de um Criador', async () => {
        const role = "colorist"
        const response = await request(app).get(`/comic/creator/role/${role}`)

        expect(response.status).toEqual(200)
        expect(response.body[0].creators[0].name).toBe("Daniele Rudoni")
        expect(response.body[0].creators[0].role).toBe(role)
    })
})