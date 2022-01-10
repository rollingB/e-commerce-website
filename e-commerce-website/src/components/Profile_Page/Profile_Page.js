import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Container, Tabs, Tab, Col,Row, Card} from "react-bootstrap";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Orders from "./Orders";
import PlaceOrder from "../Purchase/PlaceOrder";

function Profile_Page(props) {
    const [userInfo, setUserInfo] = useState({})
    const userId = props.userId

    useEffect(()=> {
            axios.get(`/profile/${userId}`).then((res)=>setUserInfo(res.data))
    },[])

    return (
        <Container>
            <Tabs>
                <Tab eventKey={'Cart'} title={'Cart'}>
                    <h1><strong>Cart</strong></h1>
                    <Cart cart={userInfo.cart} className={'overflow-auto'}/>
                    <PlaceOrder onclick={()=>useEffect} userId={userId}/>
                </Tab>
                <Tab eventKey={'Wishlist'} title={'Wishlist'}>
                    <Wishlist/>
                </Tab>
                <Tab eventKey={'Profile'} title={'Profile'}>
                    <Card>
                    <Container className={'w-50'} align={'left'}>
                        <Row>
                        <Col align={'left'}>
                    First Name: <br/>
                    Last Name:  <br/>
                    Email:       <br/>
                    Address:    <br/>
                    Join date:
                        </Col>
                        <Col>
                            {userInfo.first_name}<br/>
                            {userInfo.last_name}<br/>
                            {userInfo.email}<br/>
                            {userInfo.address}<br/>
                            {userInfo.createdAt===undefined?''
                                :new Date(Date.parse(userInfo.createdAt)).toLocaleString()}
                        </Col>
                        </Row>
                    </Container>
                    </Card>
                </Tab>
                <Tab eventKey={'Orders'} title={'Orders'}>
                    <h1><strong>Orders</strong></h1>
                    <Orders orders={userInfo.orders}/>
                </Tab>
            </Tabs>

        </Container>
    )
}

export default Profile_Page;




