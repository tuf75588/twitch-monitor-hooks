import React from 'react';

// create our global state object for twitch requests.
export const Store = React.createContext({
  channels: ['hungricorgi', 'rammy', 'hungry', 'just_stevo', 'okpai', 'eviltoaster'],
  streamData: [],
  filter: 'All'
});
