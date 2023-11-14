const Accessory = require('../models/Accessory');


exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getRemaining = (accessories) => Accessory.find({ _id: {$nin: accessories}});