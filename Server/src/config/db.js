const mongoose = require('mongoose');
const mongooseConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}
module.exports = mongooseConnection