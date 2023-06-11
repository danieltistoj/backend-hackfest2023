


export class petRouter {
    constructor(router, controller, response, httpCode) {
        this._router = router()
        this._controller = controller
        this._response = response
        this._httpcode = httpCode
        this.registerRouter()
    }
    registerRouter() {
        this._router.post('/create-pet', this.handleCreatePet.bind(this));
        this._router.get('/all-pet', this.handleAllPets.bind(this));
    }
    async handleCreatePet(req, res) {
        try {
            const pet = req.body
            const file = req.files
            const result = await this._controller.createPet(pet, file)
            this._response.succes(req, res, result, this._httpcode.OK);
            
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
    async handleAllPets(req, res) {
        try {
            const result = await this._controller.allPets()
            this._response.succes(req, res, result, this._httpcode.OK);
            
        } catch (error) {
            this._response.error(req, res, error, this._httpcode.BAD_REQUEST);
        }
    }
}