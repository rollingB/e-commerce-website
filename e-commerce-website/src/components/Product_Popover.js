import React from "react"
import {Popover, PopoverBody, PopoverHeader, Tooltip} from "react-bootstrap";
import ReactStars from "react-stars/dist/react-stars";

class Product_Popover extends React.Component{
    render() {
        return(
            <Popover>
                <PopoverHeader id='popover-basic'>
                    {this.props.title}
                    <ReactStars value={this.props.average_rating}>{this.props.average_rating}</ReactStars>
                    {this.props.genres}
                </PopoverHeader>
                <PopoverBody style={{
                    maxHeight:"20%",
                    overflow:'invisible'
                }}>
                    {this.props.description}
                </PopoverBody>
            </Popover>
        )
    }
}

export default Product_Popover;