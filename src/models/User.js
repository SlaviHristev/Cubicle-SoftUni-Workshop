const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userChema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, 'Username required!'],
        minLength: [5, 'Username is too short!'],
        match: /^[A-Za-z0-9]+$/,
        unique: [true, 'User already exists!']
    },
    password: {
        type:String,
        required:[true, 'Password required!'],
        validate:{
            validator: function(value){
                return /^[A-Za-z0-9]+$/.test(value)
            },
            message: 'Invalid Password'
        },
        minLength: [8,'Password is too short!']
    }
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