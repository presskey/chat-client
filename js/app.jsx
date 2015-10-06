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

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <MessageForm />
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
  render() {
    return (
      <form>
        <input type="text" placeholder="Type a message here" />
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
