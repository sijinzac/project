import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import AwesomeTask from './AwesomeTask.jsx';
import AwesomeCart from './AwesomeCart.jsx';
import AwesomeCheckout from './AwesomeCheckout.jsx';
import styles from './main.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {wish: "Hi", count: 0, boxtxt: "Enter Input"};
  }

  changeBoxtxt(boxtxt) {
    this.setState({boxtxt});
  }

  changeCount() {
    this.setState({count: this.state.count + 1});
  }

  decCount() {
    this.setState({count: this.state.count - 1});
  }

  render () {
    setTimeout(() => {
      this.setState({wish: "Welcome"});
      }, 1500)
    var style = {
      color: 'red'
    }
    return (
    <div className={styles.main}>
    <AwesomeCheckout count={this.state.count} decCount={this.decCount.bind(this)}/>
    <h1 style={style}> {this.state.wish} </h1>
    <AwesomeComponent changeBoxtxt={this.changeBoxtxt.bind(this)} boxtxt={this.state.boxtxt} title={"How are you?"} />
    <AwesomeTask txt={"hello world"}/>
    <AwesomeCart changeCount={this.changeCount.bind(this)} count={this.state.count}/>
    </div>
    );
  }
}


render( <App/>, document.getElementById('app'));
