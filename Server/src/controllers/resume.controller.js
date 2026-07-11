const uploadResume = require('../services/resume.services');

const uploadController = async (req, res)=>{
    try {
        const result = await uploadResume.uploadController(
            req.user,
            req.file
        );   
    }  catch (error) {
        return {
            status : 400,
            message: "Invalid User"
        } 
    }
}
module.exports = {
    uploadController
};