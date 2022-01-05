import mongoose from "mongoose";
import {makeconnection} from "./connect.js";

const bookschema = mongoose.Schema({
    _id : Object,
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
addprice()
export default Book