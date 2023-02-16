const express = require('express');
const router = express.Router();
const {FeedBackQuestions} = require('../model/feedBackQuestion');
const {Rating} = require('../model/rating');
 const {QuestionChoose} = require('../model/questionChoose');
const {Answer} = require('../model/answer');
const { date } = require('joi');


router.post('/', async (req,res)=>{
    // this is the skeleten which the data is sent
    // body = {
    //  {
    //         question: 'question',
    //         active: true
    
    //    
    // }
    body= req.body;   
    
    const data =  FeedBackQuestions({questions:body.question, active: body.active})
    result = await data.save();
    if(!result){
        res.status(400).send('Couldnt add feedbackquestioon')
    }
  

    res.send(data)
})


router.post('/choose', async(req,res)=>{
    body= req.body;  
    const data2 =  QuestionChoose({chooseContent:body.chooseContent , question_id: body.question_id})
    resultx = await data2.save();
    if(!resultx){
        res.status(400).send('Couldnt add feedbackquestioon')
    }
    res.send('200')
})

router.post('/rating', async (req,res)=>{
    body= req.body;  
    const data2 =  Rating({food_id:body.food_id, rating: body.rating, feedBack: body.feedBack, time: Date.now()})
    resultx = await data2.save();
    if(!resultx){
        res.status(400).send('Couldnt add feedbackquestioon')
    }
    res.send('200')
})


router.post('/answer', async (req,res)=>{
    body= req.body;  
    const data2 =  Answer({food_id:body.food_id,question_id: body.question_id, choose_id: body.choose_id, time: Date.now() })
    resultx = await data2.save();
    if(!resultx){
        res.status(400).send('Couldnt add feedbackquestioon')
    }
    res.send('200')
})

// get questions
router.get('/', async (req,res)=>{
    const data = await FeedBackQuestions.find();
    if(!data) return res.status(404).send('page not found')
    res.send(data)
})

// get questions single
router.get('/singleQ/:id', async (req,res)=>{
    const data = await FeedBackQuestions.findById(req.params.id);
    if(!data) return res.status(404).send('page not found')
    res.send(data)
})

// get choose by question id
router.get('/choose/:id', async (req,res)=>{
    const data = await QuestionChoose.find({question_id : req.params.id})
    if(!data) return res.status(404).send('page not found')
    res.send(data)
})


// get rating
router.get('/rating/:foodId', async (req,res)=>{
    const data = await Rating({food_id: req.params.foodId})
    if(!data) return res.status(404).send('page not found')
    res.send(data)
})
let ans = [];
let count = 1;
// get persentage of answeres
router.get('/answer/:qId/:foodId', async (req,res)=>{

    // first get all choose content on the question
    const data = await QuestionChoose.find({question_id : req.params.qId});
    if(!data) return res.status(404).send('Could not get choosen content')

    // collect choosen id anser count per choosen id 
 
    // to get over all counts and put it on var
    data.forEach(async (element) => {
        const choos = await Answer.find({question_id:req.params.qId,food_id:req.params.foodId, choose_id: element._id}).count()
        if(!choos) return res.status(404).send('Could not get choosen content')
        count = count + choos; // to count over all answere
    });

    // after calculating persentage, put in object array to be outputed to front end
    data.forEach(async (element) => {
        const choos = await Answer.find({question_id:req.params.qId,food_id:req.params.foodId, choose_id: element._id}).count()
        if(!choos) return res.status(404).send('Could not get choosen content')
        const body = {
            id: element.question_id,
            name: element.chooseContent,
            count: (choos*100)/count
        }
        // console.log(body)
        
  ans.push(body)
    } );

//    console.log(count)
res.send(ans)
// the last lines are to remove the pushed data in the array ans and count data 
// i did this b/c when i test it on post man , it returns the previous data that has been requested before
// so i made sure i empty the array ans and value count to 1 so that when next request comes, it will always be calculated in empty ans aray
ans=[];
count = 1;
})

// update question
router.patch('/:id', async (req,res)=>{
    const data = await FeedBackQuestions.findByIdAndUpdate(req.params.id,{questions: req.body.question})
    if(!data ) return res.status(400).send('error updating')
    res.send(true)
})

// update choice
router.patch('/choice/:id', async (req,res)=>{
    const data = await QuestionChoose.findByIdAndUpdate(req.params.id,{chooseContent: req.body.content})
    if(!data ) return res.status(400).send('error updating')
    res.send(true)
})









module.exports=router;
