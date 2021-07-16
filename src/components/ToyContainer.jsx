import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = ({toys}) => {
  return(
    <div id="toy-collection">
      {toys.map((toy) => 
      // console.log("Single Toy Object", toy)
      <ToyCard toy={toy}/>
      )}
    </div>
  );
}

export default ToyContainer;
