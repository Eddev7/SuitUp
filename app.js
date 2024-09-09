import express from 'express';
import homeRoutes from './src/Routes/homeRoutes';
// Classe Principal do App
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
