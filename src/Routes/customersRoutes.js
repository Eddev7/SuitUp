import { Router } from "express";
import CustomersController from '../Controllers/CustomersController'
import loginRequired from "../Middlewares/loginRequired";

const router = new Router();

router.post('/', CustomersController.store);
router.put('/', loginRequired, CustomersController.update);
router.delete('/', loginRequired, CustomersController.delete);

export default router;