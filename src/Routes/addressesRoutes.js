import { Router } from 'express';
import AddressesController from '../Controllers/AddressesController';
import loginRequired from "../Middlewares/loginRequired";

const router = new Router();

router.post('/', loginRequired, AddressesController.store);

export default router;
