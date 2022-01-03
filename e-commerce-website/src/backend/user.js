import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            validate: isEmail
        },
        first_name: {
            required: true,
            type: String,
        },
        last_name:{
            required: true,
            type: String,
        },
        address:{
            required:true,
            type: String,
        },
        password: {
            required: true,
            type: String,
        },
        wishlist:{
            required: false,
            type: Array
        },
        cart:{
            required: false,
            type: Array
        },
        orders:{
            required:false,
            type: Array
        }

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userSchema);


export default User