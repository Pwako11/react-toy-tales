import React, { Component } from 'react';

class ToyForm extends Component {

  state ={
    name: "",
    image: ""
  }

  handleOnSubmit= (event) => {
    event.preventDefault()
    this.props.addNewToy(this.state)
    this.setState({
      name: "",
      image: ""
    })
    
  }

  handleOnChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value    
    })

  }
  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleOnSubmit} >
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.handleOnChange} />
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.handleOnChange}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit" />
        </form>
      </div>
    );
  }

}

export default ToyForm;
