import React  from "react";
import Rating from "react-rating"
import { createPopper } from '@popperjs/core';
import Card from "react-bootstrap/Card"
import {Routes, Route, Link } from "react-router-dom";
import {Container, Row, Col, OverlayTrigger, Popover, PopoverBody, PopoverHeader} from "react-bootstrap";
import Product_Popover from "./Product_Popover";
import ReactStars from "react-stars";

const doc = {"_id":{"$oid":"618c360a73975dfa37fef4e9"},"title":"Inner Circle","cover_link":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389046834l/630104.jpg","author":"Kate Brian, Julian Peploe","rating_count":"7597","review_count":"196","average_rating":"4.03","five_star_ratings":"3045","four_star_ratings":"2323","three_star_ratings":"1748","two_star_ratings":"389","one_star_ratings":"92","number_of_pages":"220","date_published":"January 1st 2007","publisher":"Simon  Schuster Books for Young Readers","genre_and_votes":"Young Adult 161, Mystery 45, Romance 32","isbn":"1416950419","isbn13":"9781416950417","description":"Reed Brennan arrived at Easton Academy expecting to find an idyllic private school experience -- challenging classes, adorably preppy boys, and a chance to create a new life for herself. Instead, she discovered lies, deception, blackmail, and...murder. But, thankfully, the killers were caught and the nightmare is finally over.     Now, with a new school year ahead of her, Re Reed Brennan arrived at Easton Academy expecting to find an idyllic private school experience -- challenging classes, adorably preppy boys, and a chance to create a new life for herself. Instead, she discovered lies, deception, blackmail, and...murder. But, thankfully, the killers were caught and the nightmare is finally over.     Now, with a new school year ahead of her, Reed steps back on Easton's ivy-covered campus ready to start over. So when the headmaster announces that billings is forbidden from holding their traditional, secretive initiation, Reed is relieved. She champions the new rules and the six new girls the administration has picked to live in Billings Hall: Constance, Missy, Lorna, Kiki, Astrid, and newcomer Sabine.     But Reed's fellow Billings resident and new nemesis, Cheyenne Martin, believes the changes are a mockery of Billings history. Despite the new rules, Cheyenne vows to keep the old ways alive, no matter what -- or   -- stands in her way..."}





class CatalogueBlock extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <OverlayTrigger trigger={['hover','focus']} placement={'right'}
                            overlay={
                                <Popover inline>
                                    <PopoverHeader id='popover-basic'>
                                        <h5><strong>{this.props.title}</strong></h5>
                                            <Row>
                                                <h6 style={{fontSize:'12px'}}><strong>Avg Rating: </strong>{this.props.average_rating},<strong> Rating Count: </strong>{this.props.rating_count}</h6>
                                            </Row>
                                        <h6 style={{fontSize:'12px'}}><strong>Genres and Votes:</strong> {this.props.genre_and_votes} </h6>
                                    </PopoverHeader>
                                    <PopoverBody style={{
                                        overflow:'hidden',
                                        textOverflow:'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '4',
                                        maxHeight:'7.5em',
                                        wordWrap:'break-word',
                                        WebkitBoxOrient: 'vertical'
                                    }}>
                                        {this.props.description}
                                    </PopoverBody>

                                </Popover>
                            }>
                <Card>
                    <Link to={`books/${String(this.props._id)}`} >
                    <Card.Img variant="top" src={this.props.cover_link} fluid/>
                    </Link>
                </Card>
            </OverlayTrigger>
        )//A book's card links to the path /books/(book object id)
    }
}




export{CatalogueBlock}
