const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required!'],
    },
    description: {
        type:String,
        required: [true, 'Description is required!']
    },
    imageUrl:{
        type:String,
        required:[true, 'Image URL is required'],
    },
    difficultyLevel:{
        type:String,
        required:true
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref:'Accessory',

    }],
    creatorId:{
        type:String,
        required:true
    }
});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;

