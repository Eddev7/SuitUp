class HomeController {
    
    index(req, res) {
        res.send('API - SuitUp')
    }

}   

export default new HomeController();