class Chat extends React.Component {
  render() {
    return (
      <div>
        <MessageList />
        <MessageForm />
      </div>
    );
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        <Message text="message1" />
        <Message text="message2" />
        <Message text="message3" />
      </ul>
    );
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
