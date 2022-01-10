import mongoose from "mongoose";
import makeconnection from "./connect.js";
import {ObjectId} from "mongodb";

const bookschema = mongoose.Schema({
    _id : {type:ObjectId,},
    title : String,
    cover_link : String,
    author : String,
    rating_count : String,
    review_count : String,
    average_rating : String,
    five_star_ratings : String,
    four_star_ratings : String,
    three_star_ratings : String,
    two_star_ratings : String,
    one_star_ratings : String,
    number_of_pages : String,
    date_published : String,
    publisher : String,
    genre_and_votes : String,
    isbn : String,
    isbn13 : String,
    description : String,
    genres : Array,
    tags : Array,
    price: Number
}
)


const Book = new mongoose.model("Book",bookschema,'books')

async function getmodels() {
    const foundbook = Book.find({},
        (err,docs)=>{
        docs.forEach(async (doc)=>{
            doc.genres = doc.genre_and_votes.replace(/\s[0-9]+/g,"").split(', ');
            await doc.save()
            })
        }
    )
}

async function removefields(){
    await makeconnection()
    Book.updateMany({},
        {$unset:{
            five_star_ratings:null,
            four_star_ratings:null,
            three_star_ratings:null,
            two_star_ratings:null,
            one_star_ratings:null
        }}).then(doc =>{
            console.log(doc)
    })
    }

async function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function addprice(){
   Book.find({},
         (err,docs)=>{
        docs.forEach(async (doc)=>{
            doc.price = await getRandomInt(300,1000)
            doc.save()
        })
    }
    )
}

async function fillnulls(){
    Book.find({isbn:null,isbn13:null},(err,docs)=>{
        docs.forEach(async (doc) => {
            doc.isbn = doc.isbn13 = undefined
            await doc.save()
        })
        console.log(docs)
    }).then(
    Book.find({isbn:null},(err,docs)=>{
        docs.forEach(async (doc) => {
            doc.isbn = undefined
        })
        console.log(docs)
    })
    ).then(
    Book.find({isbn13:null},(err,docs)=>{
        docs.forEach(async (doc) => {
            doc.isbn13 = undefined
            await doc.save()
        })
        console.log(docs)
    })
        )
}


export default Book