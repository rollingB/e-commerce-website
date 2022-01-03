import React from "react"
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import SearchBox from "./Searchbox";
import {Route,Routes} from 'react-router-dom'
class Navigation extends React.Component{
    render() {
        return(
        <Navbar bg="dark" variant="dark" style={{height:"10%",marginBottom:"3%"}} className={'align-items-start'}>
                <NavbarBrand>
                    <img src={"book_logo.png"}
                         class={'img-fluid'}
                         style={{height:'10%',width:'10%'}}/>
                    {' '}Books
                </NavbarBrand>
                <SearchBox/>
        </Navbar>
        )
    }
}

export default Navigation;