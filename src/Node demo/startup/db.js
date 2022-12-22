const winston=require('winston');
const mongoose= require('mongoose');
const logger = require('./logging');

module.exports= async function(){

    const url='mongodb://0.0.0.0:27017/Customer';
    mongoose.set('strictQuery', true);
   
  await  mongoose.connect(url,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
   // .then(()=> winston.info('connected to MongoDb ...')
     .then(()=> logger.log('info','connected to MongoDb ...')
    );
}


