import React from "react";
import {Button} from "react-bootstrap";
import axios from "axios";

function PlaceOrder(props){
    return(
        <Button onClick={
            ()=>axios.get(`/order/${props.userId}`)}>Order</Button>
    )
}

export default PlaceOrder