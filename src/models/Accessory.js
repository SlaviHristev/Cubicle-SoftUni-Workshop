const mongoose = require('mongoose');
const accessorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required!']
    },
    imageUrl:{
        type:String,
        required: [true, 'Image URL is required!']
    },
    description:{
        type:String,
        required:[true, 'Description is required!']
    },
    
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;