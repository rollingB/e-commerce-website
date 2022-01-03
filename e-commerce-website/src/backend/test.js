import {makeconnection} from "./connect.js";
import Book from "./book.js";
import Fuse from "fuse.js";
import {useCallback} from "react";



async function test(){
    const books = await Book.find({}).limit(1000).lean()
    const options = {keys: ["author", "title", "isbn", "isbn13", "genres"]}
    const index = Fuse.createIndex(options.keys,books)
    const fuse = new Fuse(books, options,index)
    const result = fuse.search("Inner Circle")
}



test()