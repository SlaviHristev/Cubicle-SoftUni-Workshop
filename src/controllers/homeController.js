const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const { extractErrorMessages } = require('../utils/errorHelper');
router.get('/', async (req,res) =>{
    const  { search, from, to} = req.query;
    try {
        const cube = await  cubeManager.getAll(search, from, to);
        res.render('index', { cube });
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/', errorMessages)
    }

});

router.get('/about', (req,res) => {
    res.render('about');
})


module.exports = router;