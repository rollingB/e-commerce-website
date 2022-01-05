import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import User from "./user.js";
import {makeconnection} from "./connect.js";
import bcrypt from "bcryptjs";
import Book from "./book.js";
import Fuse from "fuse.js";
import {ObjectId} from "mongodb";
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(5000, () => {
    console.log("Server is running at port 5000");
})

app.get('/', async (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

});

app.get('/search/:searchPhrase',async (req,res)=>{
        console.log(req.params.searchPhrase)
        const books = await Book.find({},(err,books)=>{console.log('found')
            const options = {keys: ["author","title","isbn","isbn13","genres"]}
            const fuse = new Fuse(books,options)
            const result = fuse.search(req.params.searchPhrase)
            res.send(result)
            console.log(result)}
        ).limit(1000).lean().clone()
    }
)

app.get("/querythebooks",async (req,res)=>{
    await Book.find({},(err,doc)=>{
        const stringified_documents = JSON.stringify(doc)
        res.send(stringified_documents)
        console.log('sent')
    }).limit(100).clone().lean()
})

app.get('/fetch_book/:book_id', async (req,res)=>{
    const id = await ObjectId(req.params.book_id)
    Book.findById( id,(err,doc)=>{
        res.send(doc)
    })
})

app.get('/addtocart/:book_id', (req,res)=>{
    console.log('ok')
})

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const new_signup = await req.body
    new_signup.password =  bcrypt.hashSync(new_signup.password)
    const newuser = new User(req.body);
    console.log(newuser);
});




app.post("/login", async (req, res) => {

    async function authenticate(login){
        const auth_value = await User.exists(login);
        return(auth_value)
    }
    req.body.password = bcrypt.hashSync(req.body.password)
    console.log(req.body)
    let user_id = await User.findOne(
        {email:req.body.email},
        '_id',
        )
    user_id = user_id._id.toString()
    console.log(user_id)
    res.send(user_id)

});

export default app ;