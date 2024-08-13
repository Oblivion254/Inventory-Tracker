import { Router } from 'express';
import { getAllCustomers, addCustomer } from '../controllers/customerController.js';

const router = Router();

router.get('/', getAllCustomers);
router.post('/', addCustomer);

export default router;
