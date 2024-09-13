import { Router } from "express";
import CustomersController from '../Controllers/CustomersController'

const router = new Router();

router.post('/', CustomersController.store);
router.put('/:id', CustomersController.update);

export default router;