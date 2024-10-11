import model from "../Models/CustomersModel";

class CustomersController {
    
    // rota de cadastro do cliente
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

    // rota de alterar cliente
    async update(req, res) {

        try {

            const id = req.customerID;

            const customer = await model.findById(id);

            if(!customer) {
                return res.status(401).json({
                    errors: 'Cliente não existe'
                });
            }

            const update = await model.update({id: id, json: req.body});
            res.send(update);
            
        } catch(e) {
            res.status(400).json({
                error: e.message
            })
        }
    }

    // rota de deletar cliente
    async delete(req, res) {
        try {
            const id = req.customerID;

            const customerCheckout = await model.findById(id);

            if(!customerCheckout) {
                return res.status(401).json({
                    errors: 'Cliente não existe'
                });
            }

            const customer = await model.delete(id);

            res.send({
                customer
            })
        } catch(e) {
            
        }
    }
}

export default new CustomersController();