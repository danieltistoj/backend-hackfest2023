import dotenv from "dotenv"

dotenv.config()

export const config = {
    api:{
        port: process.env.PORT || 4000,
        hostname: process.env.HOSTNAME || 'localhost',
        name: process.env.NAME || 'Backend-HackFest'
    }
}