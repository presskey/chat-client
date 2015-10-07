import React from 'react';
import Faye from 'faye';
import MessageList from './message_list.jsx';
import MessageForm from './message_form.jsx';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.client = new Faye.Client(props.url);
    this.client.subscribe('/chat', this.handleMessageReceive.bind(this));
  }

  handleMessageReceive(message) {
    this.setState((state) => { messages: state.messages.push(message) })
  }

  handleMessageSubmit(message) {
    this.client.publish('/chat', message)
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm onMessageSubmit={this.handleMessageSubmit.bind(this)} />
      </div>
    );
  }
}
