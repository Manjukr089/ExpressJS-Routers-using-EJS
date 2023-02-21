const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'ejs') //! ejs = embedded js
app.use(express.static('public'))


// app.set('view engine','hbs')
// app.set('views','hbsFile')

hbs.registerPartials('./hbsFile/partials')

const adminRoute = require('./routes/admin')
const usersRoute = require('./routes/users')

app.get('/',(req,res)=>{
    res.render('home')
})  
app.use('/admin',adminRoute)
app.use('/users',usersRoute)

app.listen(3000,(req,res)=>{
    console.log("Listening to the port 3000");
})