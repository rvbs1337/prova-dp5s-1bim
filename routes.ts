import { Router } from 'express'

import characterController from './src/character/character.controller'

const routes = Router()
routes.get('/health-check')

routes.get('/personagens', characterController.findAll)

export {
    routes
}