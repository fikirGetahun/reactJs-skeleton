const express= require('express');
const app= express();
// const loginRoute = require('./routes/auth')
const cors = require('cors')

app.use(cors())
const logger=require('./startup/logging');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

// app.use('/login2', loginRoute )

const port=process.env.PORT || 3002;
//app.listen(port,()=>winston.info(`Listinging on port ${port} ... ${new Date()}`));
app.listen(port,()=>logger.log('info',`Listinging on port ${port} ... ${new Date()}`));


