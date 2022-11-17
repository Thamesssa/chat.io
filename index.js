const express = require('express')

const app = express()
const config = require('./config/app')


app.get('/home' ,(req, res ) =>{
    return res.send('Home Screen')
})

app.get('/login', (req, res) =>{
    return res.send('login Screen')
})

const port = config.appPort

app.listen(port, ()=> {
    console.log("Sever listening on port " + port)
})
console.log("Thamsanqa Shabangu")