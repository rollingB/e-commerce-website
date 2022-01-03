import React, { useState } from 'react'
import { Form, Button, Col, Row} from 'react-bootstrap'
import axios from "axios";


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            setKeyword: '',
            submit: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleSubmit(event) {
        const keyword = this.state.keyword
        this.setState({submit:true})
        axios.get(`/search/${keyword}`)
        event.preventDefault()
    }



    handleChange(event) {
        const keyword = this.state.keyword
        event.preventDefault()
        this.setState({keyword: String(event.target.value)})
    }
    render() {
        return (

            <Form onSubmit={this.handleSubmit} style={{alignSelf:'end'}} inline>
                <Row>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Form.Control
                    type='text'
                    name='q'
                    onChange={this.handleChange}
                    placeholder='Search Products...'
                    className='mr-sm-2 ml-sm-5'
                />
                    </Col>
                    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Button type='submit' variant='outline-success'>
                    Search
                </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}
export default SearchBox