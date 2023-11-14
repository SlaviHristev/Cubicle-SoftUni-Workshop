const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const cubeController = require('./controllers/cubeController')

router.use(homeController);
router.use(userController);
router.use('/cubes', cubeController);



module.exports = router;