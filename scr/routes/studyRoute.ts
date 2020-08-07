import express from 'express';
import controller from '../controllers/studyController';

const router = express.Router();
router.get('/', controller.rotaIndex);

export default router;