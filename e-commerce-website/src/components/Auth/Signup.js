import logo from '../../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from "axios";
import {Button, Container, Form, FormControl, FormText} from "react-bootstrap";





function Signup(){
        const[firstname,setFirstname] = useState()
        const[lastname,setLastname] = useState()
        const[email,setEmail] = useState()
        const[address,setAddress] = useState()
        const[password,setPassword] = useState()



    function handleSubmit(e) {
        axios.post(
            "/signup",
            {
                "first_name":firstname,
                "last_name":lastname,
                "email":email,
                "address":address,
                "password":password
            }
        ).then( function (res){
            alert(JSON.stringify(res.data));
        }).catch(function (error) {
            console.log(error)
        });
        e.preventDefault();
    };


      return (
          <Container className={'border'} style={{maxWidth:"600px", padding:"2%"}} fluid={"sm"}>
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

                  <Form.Group  className="mb-3" controlId="firstname">

                      <Form.Label>First Name</Form.Label>
                      <Form.Control name={'firstname'}
                                    onChange={(e)=>{setFirstname(e.target.value)}}
                                    type="firstname"
                                    placeholder="Enter email" />

                      <Form.Text className="text-muted">
                      </Form.Text>
                  </Form.Group>

                  <Form.Group  className="mb-3" controlId="lastname">

                      <Form.Label>Last Name</Form.Label>
                      <Form.Control name={'lastname'}
                                    onChange={(e)=>{setLastname(e.target.value)}}
                                    type="lastname"
                                    placeholder="Enter email" />

                      <Form.Text className="text-muted">
                      </Form.Text>
                  </Form.Group>

                  <Form.Group  className="mb-3" controlId="email">

                      <Form.Label>Home Address</Form.Label>
                      <Form.Control as={'textarea'}
                                    rows={3}
                                    name={'homeaddress'}
                                    onChange={(e)=>{setAddress(e.target.value)}}
                                    type="address"
                                    placeholder="Enter Home Address" />
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


export default Signup;
