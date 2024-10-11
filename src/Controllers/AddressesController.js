import model from '../Models/AddressesModel'

class AddressesController {
    
    // rota de cadastro de endereço
    async store(req, res) {
        
        try {
            
            const id = req.customerID;

            const newAddress = await model.create(id, req.body);
             
            res.json(newAddress)
       
        } catch(e) {
            res.status(400).json({
                error: e.message
            })
        }
    }

}   

export default new AddressesController();