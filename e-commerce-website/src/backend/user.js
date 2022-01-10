import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';


const cartschema = new mongoose.Schema(
    {
        book:{
        required:true,
        type: String,
        index:true
        },

        cover_link: String,

        count:{
        required:true,
        type:Number,
        default: 1
        },
        price: Number,
    },
    {autoIndex:false}
)

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
           type:[cartschema],
            default:[]
        },
        cart:{
            type:[cartschema],
            default:[]
        },
        orders: {
            type:Array,
            default:[]
        }

    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("users", userSchema);



export default User