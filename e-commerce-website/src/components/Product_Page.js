import React, {useEffect, useState} from "react";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import Rating from "react-rating"
import ReactStars from "react-stars/dist/react-stars";
import {useParams} from "react-router-dom";
import axios from "axios";


const doc = {"_id":{"$oid":"618c360a73975dfa37fef4e9"},"title":"Inner Circle","cover_link":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389046834l/630104.jpg","author":"Kate Brian, Julian Peploe","rating_count":"7597","review_count":"196","average_rating":"4.03","five_star_ratings":"3045","four_star_ratings":"2323","three_star_ratings":"1748","two_star_ratings":"389","one_star_ratings":"92","number_of_pages":"220","date_published":"January 1st 2007","publisher":"Simon  Schuster Books for Young Readers","genre_and_votes":"Young Adult 161, Mystery 45, Romance 32","isbn":"1416950419","isbn13":"9781416950417","description":"Reed Brennan arrived at Easton Academy expecting to find an idyllic private school experience -- challenging classes, adorably preppy boys, and a chance to create a new life for herself. Instead, she discovered lies, deception, blackmail, and...murder. But, thankfully, the killers were caught and the nightmare is finally over.     Now, with a new school year ahead of her, Re Reed Brennan arrived at Easton Academy expecting to find an idyllic private school experience -- challenging classes, adorably preppy boys, and a chance to create a new life for herself. Instead, she discovered lies, deception, blackmail, and...murder. But, thankfully, the killers were caught and the nightmare is finally over.     Now, with a new school year ahead of her, Reed steps back on Easton's ivy-covered campus ready to start over. So when the headmaster announces that billings is forbidden from holding their traditional, secretive initiation, Reed is relieved. She champions the new rules and the six new girls the administration has picked to live in Billings Hall: Constance, Missy, Lorna, Kiki, Astrid, and newcomer Sabine.     But Reed's fellow Billings resident and new nemesis, Cheyenne Martin, believes the changes are a mockery of Billings history. Despite the new rules, Cheyenne vows to keep the old ways alive, no matter what -- or   -- stands in her way..."}


function Product_Page(props) {
    const [state,setState]=useState({
        id:'',
        genre_and_votes:'',
        title:'',
        author:'',
        average_rating:'',
        isbn:'',
        isbn13:''})

    //getting the book id parameter encoded into the url.
    const {book_id} = useParams()

    useEffect(()=>{axios.get(`/fetch_book/${book_id}`).then((res)=>{
                setState(res.data)
            }
        )},[])

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={9} md={4} lg={4} style={{padding:0,alignItems:'end'}}>
                        <Card.Img src={state.cover_link} style={{marginRight:0}} fluid/>

                    </Col>
                    <Col sm={9} md={8} lg={5} style={{paddingLeft:10}}>
                        <div className={'card h-100 border-dark'} style={{marginLeft:0,Height:"20%"}}>
                        <Row>
                        <Card.Header>

                        <h3>{state.title}</h3>

                        <h6 style={{fontSize:'75%'}}><strong>Authors: </strong>{state.author}</h6>

                        <ReactStars edit={false} value={state.average_rating} size={'30%'} style={{width:'max-content'}}/>

                        <h6 style={{fontSize:'60%'}}>
                            <strong>Average Rating: </strong>{state.average_rating},
                            <strong> Number of Ratings: </strong>{state.rating_count}
                        </h6>

                        <h6 style={{fontSize:'60%'}}>
                            <strong> ISBN: </strong>{state.isbn},
                            <strong> ISBN13: </strong>{state.isbn13}
                        </h6>
                        <h6 style={{fontSize:'75%'}}><strong>Genres: </strong>{state.genre_and_votes.replace(/\s[0-9]+/g,"")} </h6>
                        </Card.Header>
                        </Row>
                            <Card.Text style={{padding:'2%'}} fluid> <h6 style={{fontSize:'80%%'}}>{state.description}</h6></Card.Text>
                            <Row xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} style={{paddingLeft:"10%", paddingRight:'10%', paddingBottom:"10%"}}>

                                <Button style={{fontSize:'80%'}}
                                        variant={'dark'}
                                        onClick={()=>{axios.get(`/addtocart/${book_id}`)}}> Add to cart</Button>
                                <Button style={{fontSize:'80%'}}
                                        variant={'dark'}
                                        onClick={()=>{axios.get(`/addtowl/${book_id}`)}}>Add to wishlist</Button>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }


export default Product_Page