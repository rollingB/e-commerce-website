import React from 'react'
import {CatalogueBlock} from "./Catalogue_Block";
import axios from "axios";
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";



function book_array(books) {
    return (
        <Row>
            {books.map((book,index)=>(
            <React.Fragment key={index}>
                <Col sm={5} md={3} lg={2} xl={2}><CatalogueBlock {...book}/></Col>
            </React.Fragment>))}
        </Row>
    )
}

class Catalogue extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            docs : [],
            searchQuery: '',
            loading: false
        }
    }
    componentDidMount(){
        this.setState({searchQuery:this.props.searchQuery})
        if (this.state.searchQuery===''){
        this.setState({loading:true})
        axios.get("/querythebooks")
            .then((res)=>{
                this.setState({docs:res.data,
                                        loading:false})
            })
        console.log(this.state)
    }
        else {
            axios.get(`/search/${this.state.searchQuery}`)
                .then((res)=>{
                    this.setState({docs:res.data,
                        loading:false})
                })
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
            this.setState({loading:true})
            this.setState({searchQuery: this.props.searchQuery})
                axios.get(`/search/${this.props.searchQuery}`)
                .then((res)=>{
                    this.setState({docs:res.data,
                                            loading:false})
                })};
        }

    render() {

      return(
          <Container>
              {this.state.loading ? <Spinner animation={"border"} hidden={false}/>:<Spinner animation={"border"} hidden={true}/> }
              {book_array(this.state.docs)}
          </Container>
        )
    }
}

export default Catalogue;