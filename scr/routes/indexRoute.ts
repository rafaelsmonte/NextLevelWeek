import express from 'express';

const router = express.Router();
router.get('/', (req,res) =>{
    return res.sendfile('./scr/views/index.html')
});

export default router;