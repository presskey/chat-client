class Chat extends React.Component {
  render() {
    return (
      <div>
        <MessageList messages={this.props.data} />
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

let data = [
  {text: 'message1'},
  {text: 'message2'},
  {text: 'message3'}
];

React.render(
  <Chat data={data} />,
  document.getElementById('chat')
);
