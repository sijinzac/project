import React, { Component, PropTypes } from 'react';
import TestFunction from './TestFunction';
import MessageList from './MessageList';

export default class TestComponent extends Component {
  static propTypes = {
    Name: PropTypes.string,
    Contact: PropTypes.number,
    Location: PropTypes.string,
    PIN: PropTypes.number,
    User: PropTypes.array,
    datadetails: PropTypes.object,
    date: PropTypes.func,
    flag: PropTypes.bool,
  }
  componentWillMount() {
    console.log('In componentWillMount');
  }
  componentDidMount() {
    console.log('In componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('In componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('In shouldComponentUpdate');
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p> Company: {this.props.Name} </p>
        <p> Number: {this.props.Contact} </p>
        <p> Location: {this.props.Location} </p>
        <p> PIN: {this.props.PIN} </p>
        <p> User: {this.props.User[1]} </p>
        <p> Designation: {this.props.datadetails.desig} </p>
        <p> Today: {this.props.date()} </p>
        <p> Flag Value: {this.props.flag.toString()}</p>
        <TestFunction/>
        <MessageList/>
      </div>
    );
  }
}
