const Cube = require('../models/Cube');


exports.getAll = async (search, from, to) => {
    let result =  await Cube.find().lean();

    if(search){
        result = result.filter(cube => cube.name.includes(search))
    }
    
    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    };
    
    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.create = (cubeData) => Cube.create(cubeData);

exports.getOne = (_id) => Cube.findById(_id);

exports.attach = (cubeId, accessoryId) => Cube.findByIdAndUpdate(cubeId, {$push: { accessories: accessoryId}});