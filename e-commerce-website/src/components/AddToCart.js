import React from 'react'
import {Button} from "react-bootstrap";
import axios from "axios";

function AddToCart(props){
    function Add(){
        axios.get(`\add_to_cart\${props}`)}
    return(
        <Button variant={'dark'}> {props.userid} {props.bookid} </Button>
    )
}

export default AddToCart