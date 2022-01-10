import React from 'react'
import {Button} from "react-bootstrap";
import axios from "axios";

function AddToWishlist(props){
    function Add(){
        axios.get(`/addtowishlist/${props.userId}/${props.bookId}`)}
    return(
        <Button style={{margin:'1px', width:'30%'}} variant={'dark'} onClick={()=>Add()}>Add to Wishlist</Button>
    )
}

export default AddToWishlist