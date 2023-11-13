const User = require('../models/User');
const bcrypt = require('bcrypt');
const SECRET = require('../config/SECRET');


exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
const user = User.findOne(username);

    if(!user){
        throw new Error('Username or password is incorrect.')
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid){
        throw new Error('Username or password is incorrect.')
    }

    const payload = {
        _id: user._id,
        username:user.username,

    }
    const token = await jwt.sign(payload,SECRET, {expiresIn:'2d'})

    return token;
}