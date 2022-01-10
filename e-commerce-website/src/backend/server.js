import express  from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import User from "./user.js";
import makeconnection from "./connect.js";
import bcrypt from "bcryptjs";
import Book from "./book.js";
import {ObjectId} from "mongodb";
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(5000, () => {
    makeconnection()
    console.log("Server is running at port 5000");
})

app.get('/', async (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

});

app.get('/search/:searchPhrase',async (req,res)=>{
        console.log(req.params.searchPhrase)
        Book.aggregate().search({
                index: 'book_searchindex',
                text: {
                    query: req.params.searchPhrase,
                    path: ['title','isbn','isbn13','authors'],
                    fuzzy: {}
                }
            }
        ).then((results)=> {
                res.send(JSON.stringify(results))
                console.log(results)
            }
        )
    }
)

app.get('/addtocart/:userId/:bookId', async (req,res)=> {
    const userId = req.params.userId
    const bookId = req.params.bookId
    console.log(`User ID: ${userId},Book ID: ${bookId}`)
    await User.findById(userId, async (err, user) => {
        const cart = user.cart
        if(user.cart.find(item=> item.book===bookId)){
            user.cart.find(item=> item.book===bookId).count += 1
            await user.save()
        } else {
            const book = await Book.findById(bookId,["cover_link","price"])
            console.log(book)
            user.cart.push({book:bookId,
                            cover_link:book.cover_link,
                            price:book.price
            })
            await user.save()
        }
        }).clone()
})

app.get('/addtowishlist/:userId/:bookId', async (req,res)=> {
    const userId = req.params.userId
    const bookId = req.params.bookId
    console.log(`User ID: ${userId},Book ID: ${bookId}`)
    await User.findById(userId, async (err, user) => {
        user.wishlist=[]
        if (user.wishlist.find(item=> item.book===bookId)){
        } else {
            user.wishlist.push({book:bookId})
            await user.save()
        }
    }).clone()
})

app.get('/order/:userId',async (req,res)=>{
    const userId = req.params.userId
     await User.findById(userId, async (err, user) => {
        await user.orders.push(user.cart)
        user.cart=[]
        await user.save()
        console.log(user)
    }).clone()
})

app.get("/querythebooks",async (req,res)=>{
    await Book.find({},(err,doc)=>{
        if(err){
            console.log(err)
        }
        const stringified_documents = JSON.stringify(doc)
        res.send(stringified_documents)
        console.log('sent')
    }).limit(1000).clone().lean()
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
    let new_signup = req.body
    new_signup.password =  bcrypt.hashSync(new_signup.password)
    try {
        new_signup = new User(new_signup)
    }
    catch(err){
        res.send(err)
    }
    console.log(new_signup)
    await new_signup.save()
});


app.get('/profile/:userId', async (req,res)=>{
    const userId=req.params.userId
    const user= await User.findById(userId)
    res.send(JSON.stringify(user))
})

app.get(`/cart/:userId`, async (req,res)=>{
    const userId = req.params.userId
    const user = await User.findById(userId).clone()
    res.send(JSON.stringify(user.cart))
})

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