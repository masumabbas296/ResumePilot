const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");

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

module.exports = {
    registerUser
};