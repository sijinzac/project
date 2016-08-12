import React from 'react';
import Button from './Button';

export default class Message extends React.Component {
  render() {
    console.log(this.props.text);
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}
