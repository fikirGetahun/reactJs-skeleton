const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');
const config= require('config')
const bcrypt = require('bcrypt');
const _= require('lodash');
const {User,Validate} = require('../model/user');
const express= require('express');
const router= express.Router();


router.get('/me',auth,async(req,res)=>{
    
    const u=await User.findById(req.user._id).select('-password');
    res.send(u);
})

router.post('/',async(req,res)=>{

    ///--Validation using Joi
    const {error}=    Validate(req.body); 
    if(error){          return    res.status(400).send(error.details[0].message)    }

    let user=await User.findOne({        email:req.body.email    })
    if(user) return res.status(400).send('User already register');

try {
   //  user= new User({name:req.body.name,email:req.body.email, password: req.body.password});
   user =new User(_.pick(req.body,['name','email','password']));
   
  const salt= await  bcrypt.genSalt(10);
  user.password= await bcrypt.hash(user.password,salt);
let result =await user.save();
    // res.send(result);
const token=user.generateAuthToken();
   res.header('x-auth-token',token).send( _.pick(user,['_id', 'name','email']));

} catch (error) {
    res.send(error.message)
}

})

module.exports=router;