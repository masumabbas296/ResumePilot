const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Welcome to ResumePilot API 🚀 Testing Boom")
})

module.exports = router