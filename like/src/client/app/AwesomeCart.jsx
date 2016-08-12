import React from 'react';
import AwesomeTask from './AwesomeTask.jsx';

class AwesomeCart extends React.Component {
  constructor() {
    super();
    this.state = {msg: 'Welcome to Shop'};
    this.incrementCount = this.incrementCount.bind(this);
  }
  incrementCount () {
    this.setState({msg:'Item Added'});
    this.props.changeCount();
  }

  render() {
    var awecartstyle = {
    padding: '40px',
    width: '300px',
    margin: 'auto',
    background: '#9b59b6',
    color: 'white',
    padding: '20px',
    zIndex: 1
    }
    var btncartstyle = {
    background: '#f1c40f',
    border: 0,
    padding: '20px',
    width: '100%',
    outline: 'none',
    color: 'darken(#8e44ad, 10%)',
    zIndex: 3
    }
    setTimeout(() => {
      this.setState({msg: "Welcome to Shop"});
    }, 5000)
    return (
    <div style={awecartstyle}>
      <AwesomeTask txt={this.state.msg}/>
      <button style={btncartstyle} onClick={this.incrementCount}>Add to CART</button>
    </div>
    );
  }
}

export default AwesomeCart;
