import { Router } from 'express'
import userController from './controllers/userController'

const route = Router()

route.get('/', userController.getAll)
route.get('/:id', userController.getById)
route.get('/name/:name', userController.getByName)
route.post('/create', userController.register)
route.put('/update/:id', userController.update)
route.delete('/del/:id', userController.deletar)

export default route
