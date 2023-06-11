import { controllerPet } from './controller.js'
import {  petRouter } from './routes.js'
import pet from '../../models/Pet.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'

export const petModel = (expressRouter)=>{
    const controller = new controllerPet("Pet",pet)
    const router = new petRouter(expressRouter,controller,response,HttpCode)
    return router._router;
} 