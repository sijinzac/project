import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



class AwesomeCheckout extends React.Component {
  constructor() {
    super();
    this.state = {amt: 0, Item: 'Logitech Paperkraft', price: 0, showModal: false };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.remove = this.remove.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  componentDidUpdate(nextProps) {
    if(this.props.count === (nextProps.count+1)){
      this.setState({amt: this.state.amt + 57.47});
      this.setState({price: 57.47});
    }
  }
  remove() {
    if(this.props.count !== 0) {
     this.setState({amt: this.state.amt - 57.47});
     this.props.decCount();
   }
  }

  render() {
    var awecartstyle = {
    padding: '40px',
    width: '300px',
    margin: 'auto',
    background: 'white',
    color: 'black',
    padding: '20px',
    zIndex: 1
    }
    var cartStyle = {
      float: 'right'
    }
    var h1cartstyle = {
    margin: 0,
    padding: '20px',
    zIndex: 2
    }
    var btncartstyle = {
    background: 'black',
    border: 0,
    padding: '20px',
    width: '100%',
    outline: 'none',
    color: 'white',
    zIndex: 3
    }
    return (
      <div>
      <Image style={cartStyle} src="/home/sijin/Project/like/src/client/cart.jpg" circle onClick={this.open}/>
      <Modal show={this.state.showModal} onHide={this.close}>
      <div style={awecartstyle}>
      <h1 style={awecartstyle}>Item: {this.state.Item} </h1>
      <h1 style={h1cartstyle}>Count: {this.props.count}</h1>
      <h1 style={h1cartstyle}>Price: ${this.state.price}</h1>
      <Button bsStyle="danger" bsSize="large" onClick={this.remove}>Remove</Button>
      <hr></hr>
      <h1 style={btncartstyle}>Total: ${this.state.amt} </h1>
      </div>
      <Button onClick={this.close}>Close</Button>
      </Modal>
      </div>
    );
  }
}

export default AwesomeCheckout;
