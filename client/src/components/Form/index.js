import React from "react";

//need to add in the style - see comments out book example
const Form = props => {
  return (
    <form>
      <div className="form-group" style={{ textAlign: "center "}}>
      <input style={{ textAlign: "left" }}
        onChange={props.handleInputChange}
        value={props.value}
        name="title"
        type="text"
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

export default Form;