const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');

router.get('/create', (req,res) =>{
    res.render('cube/create')
})

router.post('/create', async (req,res) => {
    const {
        name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body;
    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel,
        creatorId: req.user._id
    });
    res.redirect('/');
});

router.get('/:cubeId/details', async (req,res) =>{
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const isOwner = cube.creatorId?.toString() === req.user?._id;
    res.render('cube/details',{cube, isOwner})
})


module.exports = router;