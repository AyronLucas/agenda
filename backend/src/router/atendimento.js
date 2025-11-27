import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'
import authMiddleware from '../middleware/auth.js'

const routerAtendimento = express.Router()

// routerAtendimento.post('/login', ControllerAtendimento.Login)

// routerAtendimento.get('/atendimento/context', authMiddleware(), ControllerAtendimento.FindOne)
// routerAtendimento.post('/atendimento/', ControllerAtendimento.Create)
// routerAtendimento.put('/atendimento/', authMiddleware(), ControllerAtendimento.Update)
// routerAtendimento.delete('/atendimento/', authMiddleware(), ControllerAtendimento.Delete)

routerAtendimento.get('/atendimentos', ControllerAtendimento.FindAll)
routerAtendimento.get('/atendimento/:id', ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimento/admin', ControllerAtendimento.Create)
routerAtendimento.put('/atendimento/:id', ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/:id', ControllerAtendimento.Delete)

export default routerAtendimento