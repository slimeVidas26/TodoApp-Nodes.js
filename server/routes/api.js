const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Tasks = require('../models/tasks');
const Users = require('../models/users');



//get all tasks
router.get('/tasks',(req,res)=>{
    console.log('get request of all tasks');
    Tasks.find({})
  
    .exec((err,tasks)=>{
if(err){
    console.log('Error retrieving tasks');
}
else{
   res.json(tasks) ;
}
    });
});

//get all users
router.get('/users',(req,res)=>{
    console.log('get request of all users');
    Users.find({})
    .exec((err,users)=>{
if(err){
    console.log('Error retrieving users');
}
else{
   res.json(users) ;
}
    });
});

router.post('/task' , (req,res)=>{
    console.log('post a task');
    let newTask = new Tasks();
    newTask.text = req.body.text;
    //newTask.created = req.body.created;
    newTask.user = req.body.user;
    newTask.save((err,insertedTask)=>{
if(err){
console.log('error saving Task');
}
else{
res.json(insertedTask);
}
    });
});

//delete task
router.delete('/task/:id' , (req,res)=>{
    console.log('Delete task');
    Tasks.findByIdAndRemove(req.params.id , (err,deletedTask)=>{
        if(err){
     res.json("Error deleting task");
        }
        else{
         res.json(deletedTask)
        }
    }
    )
});






module.exports = router;