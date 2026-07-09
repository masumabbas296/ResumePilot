const app = require('./app');
const dbConnection = require("./config/db");
require('dotenv').config();
dbConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log("Server Is Running on Port :", PORT);
});