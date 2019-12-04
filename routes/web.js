
const express = require("express")
const router = express.Router();


//define router middleware

//define all routes here
router.get('/',(req,res)=>{
    res.json({"message" : "Hello"});
});