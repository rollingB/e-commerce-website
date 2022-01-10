import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import {Form, Button, Container, Col, Row} from "react-bootstrap";
import AddToCart from "../Purchase/AddToCart";

const UserContext = React.createContext('')

function Login(props){
    const[email,setEmail] = useState('')
    const[password,setPassword]=useState('');
    const[userid,setUserid]=useState('')
    const[variant,setVariant]=useState('')


    function handleSubmit(e) {
            axios.post(
                "/login",
                {
                    "email":email,
                    "password":password
                }
            ).then((res)=>{
                setUserid(res.data)
                props.updateUserId(res.data)
            }).catch(function (error) {
                console.log(error)
            });
        e.preventDefault();
    }

    return (
            <Container className={'border'} style={{maxWidth:"600px", padding:"2%",marginTop:"10%"}} fluid={"sm"}>
                <Form onSubmit={handleSubmit} className={'rounded'} fluid>
                     <Form.Group  className="mb-3" controlId="email">
                         <Form.Label>Email address</Form.Label>
                         <Form.Control name={'email'}
                                       onChange={(e)=>{setEmail(e.target.value)}}
                                       type="email"
                                       placeholder="Enter email" />

                         <Form.Text className="text-muted">
                             We'll never share your email with anyone else.
                         </Form.Text>
                     </Form.Group>

                     <Form.Group className="mb-3" controlId="password">
                         <Form.Label>Password</Form.Label>
                         <Form.Control
                             name={'password'}
                             onChange={(e)=>{setPassword(e.target.value)}}
                             type="password"
                             placeholder="Password" />
                     </Form.Group>

                     <Button variant="primary" type="submit">
                         Submit
                     </Button>
                 </Form>
            </Container>
    );
    }


export default Login;