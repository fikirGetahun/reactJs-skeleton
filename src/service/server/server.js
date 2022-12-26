const express = require('express');
const routerx = require('./routes/getRouter.router')
const cors = require('cors')

const app = express();
app.use(cors())
// app.use(express.urlencoded({extended:false}))

// app.use(express.json())

app.use("/cat", routerx)
//  app.get('/', (req,res)=>{
//     res.send('helloo')
//  })
const port = 3001

app.listen(port, ()=>{
    console.log("server is running...",port)
})

