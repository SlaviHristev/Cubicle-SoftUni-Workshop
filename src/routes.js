const router = require('express').Router();

const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const cubeController = require('./controllers/cubeController')
const accessoryContoller = require('./controllers/accessoryControler');

router.use(homeController);
router.use(userController);
router.use('/cubes', cubeController);
router.use('/accessories',accessoryContoller )


module.exports = router;