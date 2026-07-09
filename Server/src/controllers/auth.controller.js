const authService = require("../services/auth.service");

// REGISTER USER
const registerUser = async(req, res)=>{
    try {
        const result = await authService.registerUser(req.body);
        res.status(result.statusCode).json(result);
    } catch (error) {
        console.log(error);
    }
}

// LOGIN USER
const loginUser = async(req, res)=>{
    try {
        const result = await authService.loginUser(req.body);
        res.status(result.statusCode).json(result);   
    } catch (error) {
        console.log(error);
    }   
}
module.exports = {
    registerUser,
    loginUser
};