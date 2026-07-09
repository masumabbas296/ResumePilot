const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require('../utils/jsonwebtoken.js')
// REGISTER USER
const registerUser = async(userData)=>{
    const {name, email, password} = userData;
    const user = await UserModel.findOne({email});
    if(user){
        return {
            statusCode: 409,
            success: false,
            message: "Email Already Exist",
        }
    }
    else{
        const hash = await bcrypt.hash(password, 12);
        const user = await UserModel.create({
            name,
            email,
            password : hash
        });
        return {
            statusCode: 201,
            success: true,
            message: "User Created Successfully",
            user
        }
    }
}

// LOGINUSER
const loginUser = async(userData)=>{
    const {email, password} = userData;
    const user = await UserModel.findOne({email});
    if(!user){
        return {
            statusCode: 404,
            success: false,
            message: "Email Not Exist",
        }
    }
    else{
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(isPasswordCorrect === false){
            return{
                statusCode: 401,
                success: false,
                message: "Password Not Matched"
            }
        }
        const token = generateToken(user);
        return {
            statusCode: 200,
            success: true,
            message: "User Login Successfully",
            user : {
                id : user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture
            },
                token
            }
        }
    }
module.exports = {
    registerUser,
    loginUser
};