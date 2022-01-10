import React, {useEffect, useState} from 'react'
import {Col, Image, Row, Container} from "react-bootstrap";
import {Link} from "react-router-dom";



function cartStack(cart){
    return(
        <div>
        {cart===undefined?''
            :cart.map((book,index)=>(
            <React.Fragment>
                <Stack {...book}/>
            </React.Fragment>
            ))}
        </div>
    )
}

function Stack(book){
    return(
        <Row className={'border'} style={{height:'10%'}}>
            <Col>
                <Link to={`/books/${book.book}`}>
           <Image src={book.cover_link} style={{maxWidth:'15%'}} fluid/>
                </Link>
            </Col>
            <Col style={{fontSize:'150%',textAlign:'right'}}>
                <strong>Price:</strong> {book.price}<br/>
                <strong>Number:</strong> {book.count}<br/>
                <strong>Item-Total:</strong> {book.price*book.count}
            </Col>
        </Row>
    )
}

function Cart(props){
    return(
     <Container>
         {cartStack(props.cart)}
         <h1 align={'right'}> <strong>Total:</strong>
             {props.cart===undefined?0
             :props.cart.reduce(function (sum, currentValue) {
                     return sum + currentValue.count * currentValue.price
                 }
                 ,0)
             }
         </h1>
     </Container>
    )

}


export default Cart