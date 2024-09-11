import { Router } from "express";
import CustomersController from '../Controllers/CustomersController'

const router = new Router();

router.post('/', CustomersController.store);

export default router;