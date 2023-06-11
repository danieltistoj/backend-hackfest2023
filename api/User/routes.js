export class userRouter {
    constructor(router, controller, response, httpCode) {
        this._router = router()
        this._controller = controller
        this._response = response
        this._httpcode = httpCode
        this.registerRouter()
    }
    registerRouter() {
        this._router.post('/create-user', this.handleCreateUser.bind(this));
        this._router.get('/all-users', this.handleAllUsers.bind(this));
        this._router.get('/getUserByName/:name', this.handleGetUserByName.bind(this));
        this._router.get('/getUserById/:id', this.handleGetUserById.bind(this));
        this._router.put('/updateUserById/:id', this.handleUpdateUserById.bind(this));
        this._router.delete('/deleteUserById/:id', this.handleDeleteUserById.bind(this));
    }
    async handleCreateUser(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const user = req.body
            console.log(user)
            const result = await this._controller.createUser(user)
            this._response.succes(req, res, result, this._httpcode.OK);
            
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleAllUsers(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const result = await this._controller.allUsers()
            this._response.succes(req, res, result, this._httpcode.OK);
            
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleGetUserByName(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const name = req.params.name
            const result = await this._controller.getUserByName(name)
            this._response.succes(req, res, result, this._httpcode.OK);
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleGetUserById(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const id = req.params.id
            const result = await this._controller.getUserById(id)
            this._response.succes(req, res, result, this._httpcode.OK);
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleUpdateUserById(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const id = req.params.id
            const body = req.body
            console.log(body)
            const result = await this._controller.updateUserById(id,body)
            this._response.succes(req, res, result, this._httpcode.OK);
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleDeleteUserById(req, res) {
        try {
            /*
            console.log(req.body)
            res.send(req.body)
            */
            const id = req.params.id
            
            const result = await this._controller.deleteUserById(id)
            this._response.succes(req, res, result, this._httpcode.OK);
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
}