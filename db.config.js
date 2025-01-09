const mongoose = require('mongoose');

const connectDB = async()=>{
    try
    {
    await mongoose.connect('mongodb://127.0.0.1:27017/myFashionHubDB')
    console.log('database connected');
    }catch(err){
        console.log(err.message);
    }
}
module.exports = connectDB;