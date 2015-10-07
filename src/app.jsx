import React from 'react';
import Chat from './components/chat.jsx';

React.render(
  <Chat url='http://localhost:3000' />,
  document.getElementById('chat')
);
