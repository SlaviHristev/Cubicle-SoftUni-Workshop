const router = require('express').Router();
const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const getDifficultyOptions = require('../utils/getDifficultyOptions');
const { extractErrorMessages } = require('../utils/errorHelper');

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
    try {
        await cubeManager.create({
            name,
            description,
            imageUrl,
            difficultyLevel,
            creatorId: req.user._id
        });
        res.redirect('/');
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('cube/create', errorMessages)
    }
});

router.get('/:cubeId/details', async (req,res) =>{
    try {
        const cube = await cubeManager.getOne(req.params.cubeId).lean();
        const isOwner = cube.creatorId?.toString() === req.user?._id;
        res.render('cube/details',{cube, isOwner})    
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/details', errorMessages)
    }
})

router.get('/:cubeId/attach', async(req,res) => {
    try {
        const cube = await cubeManager.getOne(req.params.cubeId).lean();
        const accessories = await accessoryManager.getRemaining(cube.accessories).lean();
        const hasAccessories = accessories.length > 0;
    
        res.render('accessory/attach', {cube, accessories, hasAccessories});
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/attach', errorMessages)
    }
});
router.post('/:cubeId/attach', async(req,res)=> {
    try {
        const cubeId = req.params.cubeId;
        const {accessory: accessoryId} = req.body;
    
        await cubeManager.attach(cubeId,accessoryId);
        res.redirect(`/cubes/${cubeId}/details`);     
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/attach', errorMessages)
    }
})

router.get('/:cubeId/edit', async (req,res) => {
    try {
        const cubeId = req.params.cubeId;
        const cube =  await cubeManager.getOne(cubeId).lean();
        const options = getDifficultyOptions(cube.difficultyLevel);
        res.render('cube/edit', {cube, options})
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/edit', errorMessages)
    }
});

router.post('/:cubeId/edit', async (req,res) => {
    const cubeId = req.params.cubeId;
    const {
        name,
        description,
        imageUrl,
        difficultyLevel,
    } = req.body;
    try {
        await cubeManager.edit(cubeId,{
            name,
            description,
            imageUrl,
            difficultyLevel,
        });
        res.redirect(`/cubes/${cubeId}/details`)
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/edit', errorMessages)
    }
});

router.get('/:cubeId/delete', async (req,res) => {
    try {
        const cubeId = req.params.cubeId;
        const cube = await cubeManager.getOne(cubeId).lean();
        const options = getDifficultyOptions(cube.difficultyLevel);
        res.render('cube/delete', { cube, options})
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/delete', errorMessages)
    }
});

router.post('/:cubeId/delete', async (req,res) => {
    try {
        const cubeId = req.params.cubeId;
        await cubeManager.delete(cubeId);
        res.redirect('/');
        
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('/:cubeId/delete', errorMessages)
    }
})

module.exports = router;