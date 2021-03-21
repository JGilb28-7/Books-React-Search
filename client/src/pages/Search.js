import React, { Component } from 'react';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import API from "../utils/API"
import Form from "../components/Form"
import Details from '../components/Details';


class Search extends Component {
    state = {
        books : [],
        title: "",
    };

// need the Handle Input 
// example from project work / class Mern act 
// this needs to follow the Utls folder API 

handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    //updated to this.setState wasnt allowing to type. 
    this.setState({
        [name]: value })
}

// Need to handle the submit from Mern
  // Loads all books and sets them to books 
handleFormSubmit = (event) => {
    //this links to the utils>API>Search
    event.preventDefault();
    API.searchBooks(this.state.title)
      .then(res => {
        this.setState({
            books : res.data.items ,
            title : ' '
        });
        console.log(this.state.books)
    })
      .catch(err => console.log(err));
  }

  handleSave =bookData => {
      API.saveBook(bookData)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

render(){
    return(
        <Container >
            <Row fluid >
                <Col size="12" >
                <Jumbotron >
                    <h1>Search Google for books</h1>
                    <p>Search for your favorite books</p>
                </Jumbotron>
                </Col>
            </Row>
            <Row fluid>
                <Col size="12">
                    <Card heading="Google Search">
                        <Form
                            value={this.state.title}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col size="md-12">
                    {this.state.books.length ? (
                        <Card heading="Results">
                            {this.state.books.map(book =>(
                            <Details 
                                key={book.id}
                                title={book.volumeInfo.authors}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                decription={book.volumeInfo.decription}
                                link={book.volumeInfo.infoLink}
                                handleSave = {() => this.handeSave({
                                    title: book.volumeInfo.title,
                                    authors: book.volumeInfo.authors,
                                    image: book.volumeInfo.imageLinks.thumbnail,
                                    decription: book.volumeInfo.decription,
                                    link: book.volumeInfo.infoLink,
                                })}
                            />
                            ))}
                        </Card >
                    ):(
                        <Card heading="Results"></Card>
                    )}
                </Col>
            </Row>
        </Container>
        );
    }
}


export default Search
