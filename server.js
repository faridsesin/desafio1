const express = require('express')

const app = express()
console.log(__dirname)
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=>{
   res.render('index.html')

})

app.get('/prueba',(req,res)=>{
    console.log('prueba heroku')
})


const PORT = process.env.PORT || 8081


app.listen(PORT,()=>{
    console.log(`servidior iniciado puerto ${PORT}`)
})