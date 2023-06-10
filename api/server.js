import express from 'express';
import morgan from 'morgan';
//Herlpers

//Models

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
    }

setMiddlewares() {

    this._app.use(morgan('dev'))
}

setRoutes() {

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