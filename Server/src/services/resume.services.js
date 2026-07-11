const authService = require("../services/auth.service");

// REGISTER USER
const uploadResume = async(req, res)=>{
    try {
        const result = await authService.registerUser(req.body);
        res.status(result.statusCode).json(result);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    uploadResume
};