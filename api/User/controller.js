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
    async allUsers(){
        try {
            const users = await this._model.find();
            return users
        } catch (error) {
            return error
        }
    }    
    async getUserByName(name){
        try {
            const user = await this._model.findOne({name});
            if(user!=null){
                return user
            }else{
                console.log("entro")
                throw  new Error("Username does not exist");
            }   
        } catch (error) {
            throw error.message
        }
    }
    async getUserById(id){
        try {
            const user = await this._model.findById(id);
            if(user!=null){
                return user
            }else{
                console.log("entro")
                throw  new Error("Username does not exist");
            }   
        } catch (error) {
            throw error.message
        }
    }
    async updateUserById(id,body){
        try {
            await this._model.findByIdAndUpdate(id,body);
            return {
                message: "user updated successfully",
                user: await this._model.findById(id)
            }
        } catch (error) {
            throw error
        }
    }
    
}