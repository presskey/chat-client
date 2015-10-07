import React from 'react';
import MessageList from './message_list.jsx';
import MessageForm from './message_form.jsx';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {text: 'message1'},
        {text: 'message2'},
        {text: 'message3'}
      ]
    };
  }

  handleMessageSubmit(message) {
    this.setState((state) => { messages: state.messages.push(message) })
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
