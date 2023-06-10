export class controllerUser{
    constructor(title, grade) {
        this._title = title
        this._model = grade
    }
    //crear nuevo usuario
    async createUser(body){
        try {
            console.log(body)
            const newUser = new this._model(body)
            await newUser.save()
            return await newUser
        } catch (error) {
            return error
        }
        }

}