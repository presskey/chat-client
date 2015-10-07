import React from 'react';
import Message from './message.jsx';

export default class MessageList extends React.Component {
  render() {
    let messageNodes = this.props.messages.map((message, i) =>
      <Message text={message.text} key={i} />
    );

    return <ul>{messageNodes}</ul>;
  }
}
