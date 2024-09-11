import model from "../Models/CustomersModel";

class CustomersController {
    async store(req, res) {
        
        try {
            const newCustumers = await model.create(req.body);
             
            res.json(newCustumers)
        } catch(e) {
            res.status(400).json({
                error: e.message
            })
        }
    }
}

export default new CustomersController();