import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
    <div>
     <p> Hello!!! </p>
      console.log("hello");
    <div> 
   );
  }
}


render(<App/>, document.getElementById('app'));
