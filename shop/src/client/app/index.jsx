import React from 'react';
import {render} from 'react-dom';
import Cart from './Cart.jsx';

class App extends React.Component {
  render () {
    var myStyle={
        color: '#2f4f4f',
        backgroundColor: '#c0c0c0'
    }
    return (
      <div>
       <h1 style={myStyle}>Shopping Cart</h1>;
        <Cart/>
       </div>
     );
  }
}

render(<App/>, document.getElementById('app'));
