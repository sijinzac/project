import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
  getChildContext() {
    return {color: 'purple'};
  }

  render() {
    const messages = [ 'hai', 'hello' ];
    const children = messages.map((message, iota) =>
      <Message text={message} key={iota} />
      );
    console.log(children);
    return (<div>{children}</div>);
  }
}

MessageList.childContextTypes = {
  color: React.PropTypes.string
};
