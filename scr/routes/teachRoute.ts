import express from 'express';
import controller from '../controllers/teachController';

const router = express.Router();
router.get('/', controller.rotaIndex);

export default router;