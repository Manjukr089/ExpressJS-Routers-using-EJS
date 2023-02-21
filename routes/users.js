const express = require('express')
const router = express.Router()

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

//! Users page
router.get('/',(req,res)=>{
    res.render('./components/userDash',{books})
})


module.exports = router;