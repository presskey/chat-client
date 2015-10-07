import React from 'react';
import Message from './message.jsx';

export default class MessageList extends React.Component {
  render() {
    let messageNodes = this.props.messages.map(message =>
      <Message text={message.text} />
    );

    return <ul>{messageNodes}</ul>;
  }
}
