const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/cubicle-Workshop';

async function dbConnect(){
    await mongoose.connect(uri);
    const Schema = new mongoose.Schema;
};

module.exports = dbConnect;