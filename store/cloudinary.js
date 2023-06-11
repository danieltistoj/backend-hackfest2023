
import { v2 as cloudinary } from 'cloudinary'

const usarCtrl= {};
cloudinary.config({
      cloud_name: process.env.CLOUD_NAME, 
      api_key:process.env.API_KEY,
      api_secret: process.env.API_SECRET,
      secure: true
    })
  
  usarCtrl.uploadImage = async (filePath)=>{
     return await 
     cloudinary.uploader.upload(filePath,{
          folder: process.env.FOLDER
      }
     )
  }
  usarCtrl.deleteImage = async (publicId) => {
      return await cloudinary.uploader.destroy(publicId)
    }
  
    export default usarCtrl