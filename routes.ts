import { Router } from 'express'

import characterController from './src/character/character.controller'
import apiController from './src/api/api.controller'
import comicController from './src/comic/comic.controller'
import creatorController from './src/creator/creator.controller'


const routes = Router()
routes.get('/health-check')

routes.get('/createDB', apiController.createDB)

routes.post('/character', characterController.create)
routes.post('/character/:id', characterController.updateById)
routes.get('/character', characterController.findAll)
routes.get('/character/:id', characterController.findById)
routes.delete('/character/:id', characterController.deleteById)

routes.post('/comic', comicController.create)
routes.post('/comic/:id', comicController.updateById)
routes.get('/comic', comicController.findAll)
routes.get('/comic/:id', comicController.findById)
routes.delete('/comic/:id', comicController.deleteById)
routes.get('/comic/titulo/:title', comicController.findByTitle)

routes.post('/creator', creatorController.create)
routes.post('/creator/:id', creatorController.updateById)
routes.get('/creator', creatorController.findAll)
routes.get('/creator/:id', creatorController.findById)
routes.delete('/creator/:id', creatorController.deleteById)


export {
    routes
}