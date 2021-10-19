import express from "express";
import mongoose from "mongoose";
import app from './server.js'

async function main() {
    mongoose.connect('mongodb+srv://Admin:QBUbpjBzRE5tCYv@cluster0.l000n.mongodb.net/sample_analytics.customers?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'sample_analytics'
        }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
        db.db.listCollections().toArray(function (error, result) {
            console.log(result);
        })
    });

    app.listen(3000, () => {
        console.log("Server is running at port 3000");
    })
};

main()


import validator from "validator";


const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            validate(email) {
                if (!validator.isEmail(email)) {
                    throw new Error("e-mail already exists, please choose another email.");
                }
            },
        },
        name: {
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
    },
    {
        timestamps: true,
        collection: 'customers'
    }
);

const User = mongoose.model("users", userSchema, "customers");
const one = await User.findOne({})
console.log(one)


