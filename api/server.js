import express from 'express';
import morgan from 'morgan';

//Data Base

import connectMongoDB from '../store/mongodb.js';
//Herlpers

//Models
import {userModel } from "./User/index.js"
//configuracion paths

//configuracion swagger

class Server{
    constructor(config){
        this._app = express();
        this._port = config.port
        this._hostname = config.hostname
        this._name = config.name
        this.setMiddlewares()
        this.setRoutes()
        connectMongoDB()
    }

setMiddlewares() {
    this._app.use(express.json())
    this._app.use(morgan('dev'))
}

setRoutes() {
    this._app.use("/api/v1/user", userModel(express.Router));
    this._app.get('/',(req,res)=>{
    res.send("Home Backend")
    })

}

start(){
    this._app.set('hostname', this._hostname)
    this._app.listen(this._port, () => {
      console.log(`${this._name} is running en http://${this._hostname}:${this._port}`)
    })
  }
}

export default Server