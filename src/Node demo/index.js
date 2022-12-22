const express= require('express');
const app= express();

const logger=require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();


const port=process.env.PORT || 3000;
//app.listen(port,()=>winston.info(`Listinging on port ${port} ... ${new Date()}`));
app.listen(port,()=>logger.log('info',`Listinging on port ${port} ... ${new Date()}`));

