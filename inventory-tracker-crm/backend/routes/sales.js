import { Router } from 'express';
import { getAllSales, recordSale } from '../controllers/salesController.js';

const router = Router();

router.get('/', getAllSales);
router.post('/', recordSale);

export default router;
