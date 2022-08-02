const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
   res.render('index.html')

})


app.listen(8081,()=>{
    console.log('servidior iniciado puerto 8081')
})