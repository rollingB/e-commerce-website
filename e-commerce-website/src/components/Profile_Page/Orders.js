import React from "react";
import Cart from "./Cart";
import {Accordion} from "react-bootstrap";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionBody from "react-bootstrap/AccordionBody";
import AccordionHeader from "react-bootstrap/AccordionHeader";


function orderAccordion(orders){
    return(
        <Accordion>

        {orders===undefined?''
        :orders.map((order,index)=>(
        <React.Fragment>
            <Accordion.Item eventKey={'ok'}>
                <AccordionHeader> {`Order ${index +1}`}</AccordionHeader>
                <AccordionBody>
                <Cart cart={order}/>
                </AccordionBody>
            </Accordion.Item>
        </React.Fragment>
            ))
        }
        </Accordion>
    )
}


function Orders(props){
    return(
        <div>
            {orderAccordion(props.orders)}
        </div>
    )
}

export default Orders