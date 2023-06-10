export class User{
    constructor(user){
        this.email = user.email
        this.emailVerified = false
        this.phoneNumber = user.phoneNumber
        this.password = user.password
        this.displayName = user.displayName
        this.disable = false
    }
    /*
    encryptPassword(password, hashPassword){
        this.password = hashPassword(password)
    }
    */
}