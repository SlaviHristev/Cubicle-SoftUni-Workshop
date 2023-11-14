const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    description: {
        type:String,
        required: true
    },
    imageUrl:{
        type:String,
        required:true
    },
    difficultyLevel:{
        type:String,
        required:true
    },
    accessories:{
        type:String,
    },
    creatorId:{
        type:String,
        required:true
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

