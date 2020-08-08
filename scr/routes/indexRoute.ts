import express from 'express';

const router = express.Router();
router.get('/', (req,res) =>{
    return res.render('index.html')

});

export default router;