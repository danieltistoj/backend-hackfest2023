import { controllerUser } from './controller.js'
import {  userRouter } from './routes.js'
import user from '../../models/User.js'
import { response } from '../../response/response.js'
import { HttpCode } from '../../response/httpcode.js'

export const userModel = (expressRouter)=>{
    const controller = new controllerUser("User",user)
    const router = new userRouter(expressRouter,controller,response,HttpCode)
    return router._router;
} 