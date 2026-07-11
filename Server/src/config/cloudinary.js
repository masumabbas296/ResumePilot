const cloudary = require("cloudinary").v2;
    cloudary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET    
    })
module.exports = cloudary