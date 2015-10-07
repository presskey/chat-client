import React from 'react';

export default class MessageForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    let text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) { return; }

    this.props.onMessageSubmit({text: text});
    React.findDOMNode(this.refs.text).value = '';
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
