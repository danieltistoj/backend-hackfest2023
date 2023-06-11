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
        this._router.get('/all-users', this.handleAllUsers.bind(this));
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
}