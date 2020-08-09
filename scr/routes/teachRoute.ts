import express from 'express';
import controller from '../controllers/teachController';

const router = express.Router();
router.get('/', controller.rotaIndex);
router.post('/', controller.rotaGravar);

export default router;