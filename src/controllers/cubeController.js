const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

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

router.get('/:cubeId/attach', async(req,res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    const accessories = await accessoryManager.getRemaining(cube.accessories).lean();
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', {cube, accessories, hasAccessories});
});
router.post('/:cubeId/attach', async(req,res)=> {
    const cubeId = req.params.cubeId;
    const {accessory: accessoryId} = req.body;

    await cubeManager.attach(cubeId,accessoryId);
    res.redirect(`/cubes/${cubeId}/details`);
})

router.get('/:cubeId/edit', async (req,res) => {
    res.render('cube/edit')
})

module.exports = router;