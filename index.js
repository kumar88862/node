const express=require('express')
const things=require('./things.js')
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/things',things)



app.get('/',function(req,res){
    res.send("Hello World")
})

app.get('/kumar',function(req,res){
    res.send("we are giving kumar data")
})

const db=require('./db.js')
app.use('/db',db)

app.listen(4000)