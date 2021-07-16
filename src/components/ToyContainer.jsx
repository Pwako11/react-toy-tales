import React, { Component } from 'react';
import ToyCard from './ToyCard'

class ToyContainer extends Component{
  
toycard = () => { 
  return (this.props.toys.map(toy => 
      <ToyCard key={toy.id} toy={toy}/>
      )
  )
  }
  render (){
    return(
    <div id="toy-collection">
      {this.toycard()}
    </div>
  );
}
}
export default ToyContainer;
