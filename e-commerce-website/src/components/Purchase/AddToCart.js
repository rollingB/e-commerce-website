import React from 'react'
import {Button} from "react-bootstrap";
import axios from "axios";

function AddToCart(props){
    function Add(){
        axios.get(`/addtocart/${props.userId}/${props.bookId}`)}
    return(
        <Button style={{margin:'1px', width:'30%'}} variant={'dark'} onClick={()=>Add()}> Add to Cart </Button>
    )
}

export default AddToCart