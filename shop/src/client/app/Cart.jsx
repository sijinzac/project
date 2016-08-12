import React from 'react'

class Cart extends React.Component {
  constructor(props) {
   super(props);
   this.onBuy = this.onBuy.bind(this);
 }
  onBuy(){
    //alert("Item(s) Purchased");
  }
  render(){
    return(
      <div>
        <p> Cart</p>
        //Total Count: <span>{this.state.totCount}</span>
        <div><button onClick={this.onBuy}>Buy</button></div>
      </div>
    );
  }
}

export default Cart;
