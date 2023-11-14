const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/', async (req,res) =>{
    const  { search, from, to} = req.query;

    const cube = await  cubeManager.getAll(search, from, to);
    res.render('index', { cube });
});

router.get('/about', (req,res) => {
    res.render('about');
})


module.exports = router;