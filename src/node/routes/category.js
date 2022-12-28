const express = require('express')

const auth = require( '../middleware/auth')
const{ Category, Validate }= require( '../model/category')
const router = express.Router()

router.post('/',auth, async (req,res)=>{
    const {error} = Validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    // if(error) return res.status(400).send("this is errrrrorr")

 
        const data = Category({name:req.body.name, image:req.body.image, order: req.body.order})
        const result =await data.save()
        return res.send(result);
   
})


router.get('/', async (req,res)=>{
    const data = await Category.find();
    if(!data) return res.status(404).send('page not found')
    res.send(data)
})



router.get('/:id', async(req, res)=>{
    const data = await Category.findById(req.params.id)
    if(!data) return res.status(404).send('content not found!')
     return res.send(data)
})

module.exports=router;