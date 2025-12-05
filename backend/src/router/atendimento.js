import express from 'express'
import ControllerAtendimento from '../controller/atendimento.js'


const routerAtendimento = express.Router()

routerAtendimento.get('/atendimentos', ControllerAtendimento.FindAll)
routerAtendimento.get('/atendimento/:id', ControllerAtendimento.FindOne)
routerAtendimento.post('/atendimentos', ControllerAtendimento.Create)    
routerAtendimento.put('/atendimento/:id', ControllerAtendimento.Update)
routerAtendimento.delete('/atendimento/:id', ControllerAtendimento.Delete)  

export default routerAtendimento