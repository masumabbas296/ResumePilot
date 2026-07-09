const authService = require("../services/auth.service");

const registerUser = async(req, res)=>{
    console.log(req.body);
    const result = await authService.registerUser(req.body);
    res.status(result.statusCode).json(result);
}

module.exports = {
    registerUser
};