import express from 'express';
import homeRoutes from './src/Routes/homeRoutes';
import customersRoutes from './src/Routes/customersRoutes'
// Classe Principal do App
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {
    // suporte do express para json.
    this.app.use(express.json());
    // suporte a Json querystring.
    this.app.use(express.urlencoded({ extended: true }));
    
    // Routes
    this.app.use('/', homeRoutes);
    this.app.use('/customers', customersRoutes);
  }
}

export default new App().app;
