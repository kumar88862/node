const express=require('express')
const router=express.Router()

router.get('/',function(req,res){
    res.send("new db get")

})


router.post('/',(req,res)=>{
res.send(req.body)
})

module.exports=router