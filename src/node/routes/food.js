const express = require('express')
const db2 = require('../startup/db2')
const router = express.Router()
// const auth = require('../middleware/admin')
const {Food , Validation   } = require('../model/food')
 const {Price  } = require('../model/price')
 const Category = require('../model/category')
const { compareSync } = require('bcrypt')


router.post('/' , async (req, res)=>{

 
    let {error} = Validation(req.body.food)
   
    if(error) return res.status(400).send(error.details[0].message)
    console.log('this is from express  ',req.body)
    const data = await Food({
        name: req.body.food.name,
        categoryId:req.body.food.categoryId,
        info: req.body.food.info,
        order: req.body.food.order,
        image:req.body.food.image
    })

    let foodUploadedData = await data.save()

    const pdata = await Price({
        price:req.body.price.price,
    	halfPrice:req.body.price.halfPrice,
        halfFull:req.body.price.halfFull,
    	oldPrice:req.body.price.oldPrice,
    	foodId:foodUploadedData._id
    })
    
    let priceUploadedData = await pdata.save()
  
    
     
    
    // .exec(function (err, res){
    //     console.log("this is output ",JSON.stringify(err))
    //     console.log("this is output ",JSON.stringify(res))
    //     ff = res
    //     return res
    // })
    // console.log(datax)
    // res.send({priceUploadedData, foodUploadedData})
    res.send("successfull")

    // res.send(priceUploadedData)
})


router.get('/:catId',  async (req, res)=>{
    
    const data = await Food.find({categoryId: req.params.catId})
 


    // const data =await Food.aggregate([
    //     {
    //         $lookup:{
    //             from: Category,
    //             localField: "categoryId",
    //             foreignField: "_id",
    //             as: "foodWithCategory"
    //         },
    //         $unwind: "foodWithCategory",
    //         $lookup:{
    //             from: Price,
    //             localField: "priceId",
    //             foreignField: "foodId",
    //             as: "foodWithCategoryWithPrice"
    //         }
    //     }
    // ]).exec(function (err, res){
    //     console.log("this is output ",JSON.stringify(res))
    //     return res
    // })

     
    // if(error) return res.status(400).send('404 error')

    res.send(JSON.stringify(data))
    
})


module.exports=router;