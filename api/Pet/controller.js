import cloudinary from '../../store/cloudinary.js'
import fs from 'fs-extra'

export class controllerPet{
    
    constructor(title, grade) {
        this._title = title
        this._model = grade
    }
    
    //crear perfil de mascota
    async createPet(body, files){
        try {
            console.log("Create Pet ",body)
            var newPet = new this._model(body)
            await newPet.save()
            if(files?.image){
                const result= await
                cloudinary.uploadImage(files.image.tempFilePath)   
                newPet.publicId= result.public_id
                newPet.profilePhoto = result.secure_url
                await newPet.save()
                await fs.unlink(files.image.tempFilePath);
            }
            return await newPet
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async allPets(){
        try {
            const pets = await this._model.find();
            return pets
        } catch (error) {
            return error
        }
    }    
    
    
}