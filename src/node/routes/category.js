const express = require('express')

const auth = require( '../middleware/auth')
const{ Category, Validate }= require( '../model/category')
const router = express.Router()

router.post('/',auth, async (req,res)=>{
    const {error} = Validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

 
        const data = Category({name:req.body.name, image:req.body.image, order: req.body.order})
        const result =await data.save()
        return res.send(result);
   
})

module.exports=router;