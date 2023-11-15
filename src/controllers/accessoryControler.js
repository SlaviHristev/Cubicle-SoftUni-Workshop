const router = require('express').Router();

const { extractErrorMessages } = require('../utils/errorHelper');

router.get('/create', (req,res) =>{
    res.render('accessory/create')
})

router.post('/create',async(req,res) => {
    const {
        name,
        imageUrl,
        description
    } = req.body;
    try {
        await accessoryManager.create({ name,imageUrl,description});
        res.redirect('/');
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('accessory/create', errorMessages)
    }

})
module.exports = router;