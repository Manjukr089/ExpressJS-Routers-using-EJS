const express = require('express')
const router = express.Router()
const hbs = require('hbs')

// let app = express()

// app.set('view engine','hbs')
// app.set('views','hbsFile')

let adminData = [
    {
        name:"Manju",
        id:1
    },
    {
        name:"Manu",
        id:2
    },
    {
        name:"Anjan",
        id:3
    },
    {
        name:"Kiran",
        id:4
    },
]

let books = [
    {
        title:"ReactJS",
        author:"Manju",
        pages:200
    },
    {
        title:"MongoDB",
        author:"Pavan",
        pages:673
    },
    {
        title:"ExpressJS",
        author:"Prashanth",
        pages:456
    },
    {
        title:"NodeJS",
        author:"Mruthyunjay",
        pages:345
    },
]

//! Admin page
router.get('/',(req,res)=>{
     res.render('./components/adminDash',{adminData,books})
})



module.exports = router;