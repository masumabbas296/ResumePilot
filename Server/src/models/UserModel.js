const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type : String ,
        required : true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    isDeleted : {
        type : Boolean,
        default : false
    },
    deletedAt : Date,
    createdAt : Date,
    updatedAt : Date,
},
{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;