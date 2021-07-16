import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  addNewToy = ({name, image}) =>{
    let configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({name, image, likes: 0})
    }

    return fetch("http://localhost:3000/toys", configObj)
    .then(response => response.json())
    .then(response => {console.log("Here we are adding our entries to the server", response)}
    )
  }

    
  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(response =>{
      this.setState({
        ...this.state, 
        toys: [...this.state.toys, response]
      })
     
    })

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}/>
      </>
    );
  }

}

export default App;