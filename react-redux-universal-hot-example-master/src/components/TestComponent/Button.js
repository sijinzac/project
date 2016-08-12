import React from 'react';

export default class Button extends React.Component {
  render() {
    console.log('In button');
    console.log(this.props.children);
    console.log(this.props.text);
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: React.PropTypes.string,
  text: React.PropTypes.string,
  children: React.PropTypes.string
};
