const express=require('express')
const router=express.Router()

router.get('/',function(req,res){
    res.send("This is new get response")
})

router.post('/',function(req,res){
    res.send("This is new post response")
})

module.exports=router