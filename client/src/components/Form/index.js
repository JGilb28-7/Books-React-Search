import React from "react";

//need to add in the style - see comments out book example
const Form = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center "}}>
      <input 
        onChange={props.handleInputChange}
        value={props.value}
        name={title}
        type={text}
        className="form-control"
        placeholder="Search for topic, book, author"
        id="title"
        />
    
    <button onClick={props.handleFormSubmit} className="btn btn-primary">
      Search
    </button>

    </div>
    </form>
  )
}

export default FormBtn;
// This file exports the Input, TextArea, and FormBtn components

//export function Input(props) {
  //return (
  
  //);
//}

//export function TextArea(props) {
  //return (
    //<div className="form-group">
      //<textarea className="form-control" rows="20" {...props} />
   // </div>
  //);
//}

//export function FormBtn(props) {
  //return (
    //<button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      //{props.children}
    //</button>
  //);
//}
