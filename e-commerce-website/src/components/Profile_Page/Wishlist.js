import React, {useEffect, useState} from 'react'
import {Col, Image, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


const cart = [{
    "book": "618c360a73975dfa37fef4f4",
    "cover_link": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327877256l/80631.jpg",
    "count": 1,
    "price": 564,
    "_id": {
        "$oid": "61d98040951a150bad555be1"
    }
}, {
    "book": "618c360a73975dfa37fef4f7",
    "cover_link": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327867034l/22028.jpg",
    "count": 1,
    "price": 902,
    "_id": {
        "$oid": "61d980d6951a150bad555bee"
    }
}]
function wishlistStack(){
    return(
        <div fluid>
            {cart.map((book,index)=>(
                <React.Fragment>
                    <Stack {...book}/>
                </React.Fragment>
            ))}
        </div>
    )
}

function Stack(book){
    return(
        <Row className={'border'} style={{maxHeight:'10%'}}>
            <Col>
                <Link to={`/books/${book.book}`}>
                    <Image src={book.cover_link} style={{maxWidth:'15%'}}/>
                </Link>
            </Col>
            <Col style={{fontSize:'150%',textAlign:'right'}}>
                <strong>Price:</strong> {book.price}<br/>
            </Col>
        </Row>
    )
}

function Wishlist(props){
    return(
        <Container>
            <h1><strong>Wishlist</strong></h1>
            {wishlistStack(cart)}
        </Container>
    )

}

export default Wishlist;