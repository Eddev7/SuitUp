import { Router } from 'express';
import TokenController from '../Controllers/TokenController';
const router = new Router();

router.post('/', TokenController.store);

export default router;
