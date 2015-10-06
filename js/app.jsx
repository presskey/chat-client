class Chat extends React.Component {
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

class MessageList extends React.Component {
  render() {
    let messageNodes = this.props.messages.map(message =>
      <Message text={message.text} />
    );

    return <ul>{messageNodes}</ul>;
  }
}

class MessageForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) { return; }

    this.props.onMessageSubmit({text: text});
    return;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Type a message here" ref="text" />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

class Message extends React.Component {
  render() {
    return <li>{this.props.text}</li>;
  }
}

React.render(
  <Chat />,
  document.getElementById('chat')
);
