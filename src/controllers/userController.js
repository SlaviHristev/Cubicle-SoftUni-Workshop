const router = require('express').Router();
const userManager = require('../managers/userManager');
const {extractErrorMessages} = require('../utils/errorHelper');


router.get('/register', (req,res) =>{
    res.render('user/register');
});

router.post('/register', async (req,res) => {
    try {
        const {username,password, repeatPassword} = req.body;
        await userManager.register({username,password, repeatPassword});
    
        res.redirect('/login')
    } catch (error) {
        const errorMessages = extractErrorMessages(error);
        res.render('user/register', { errorMessages })
    }

})



router.get('/login', (req,res) =>{
    res.render('user/login')
});

router.post('/login', async (req,res) =>{
        try {
            const {username,password} = req.body;
            const token = await userManager.login(username,password);
            res.cookie('token', token, {httpOnly: true});
            res.redirect('/');   
        } catch (error) {
            const errorMessages = extractErrorMessages(error);
            res.render('user/login', {errorMessages})
        }
   
})

router.get('/logout', (req,res) =>{
    res.clearCookie('token');
    res.redirect('/');
})


module.exports = router;