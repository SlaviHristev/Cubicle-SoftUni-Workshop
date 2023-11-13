const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userChema = new mongoose.Schema({
    username: String,
    password: String
});

userChema.virtual('repeatPassword')
.set(function(value){
    if(value !== this.password){
        throw new Error('Passwords missmatch');
    }
})

userChema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userChema);

module.exports = User;