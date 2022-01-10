import React from "react"
import {Container, Image, Navbar, NavbarBrand,Col,Row} from "react-bootstrap";
import SearchBox from "./Searchbox";
import {Link, Route, Routes} from 'react-router-dom'
import {SearchContext} from "../Contexts";
import cart_icon from "../resources/cart_icon.svg"
import book_logo from "../resources/book_logo.svg"
import profile_icon from "../resources/profile_icon.svg"

class Navigation extends React.Component{
    render() {
        return(
        <Navbar bg="dark" variant="dark" style={{height:"10%",marginBottom:"3%"}} className={'align-items-right'}>
                <NavbarBrand style={{marginRight:'10%'}}>
                    <Link to={'/'}>
                    <Image src={book_logo} style={{width:'50%'}}
                         fluid/>
                    </Link>
                    {' '}
                    Books
                </NavbarBrand>
            <Container>
               <Col align={'right'} style={{marginRight:'10%'}}>
            <SearchContext.Consumer>{
                    ({searchTerm: submitted,updateSearchTerm:getSearchQuery}) => (
                    <SearchBox submitSearchQuery={getSearchQuery}/>
                    )
                }
            </SearchContext.Consumer>
               </Col>
            <Col align={'right'}>
            <Link style={{marginRight:'2%'}} to={`/cart/`} align={'right'}>
            <Image src={cart_icon} style={{width:'30px'}}/>
            </Link>
            <Link style={{marginRight:'2%'}} to={`/profile`} align={'right'}>
            <Image src={profile_icon} style={{width:'40px'}}/>
                </Link>
            </Col>
                <Col align = {'right'}>
            <Link to={'/login'} style={{color:'white'}}>Login</Link>
                    {'  '}
            <Link to={'/signup'} style={{color:'white'}}>Signup</Link>
                </Col>
            </Container>
        }</Navbar>
        )
    }
}

export default Navigation;