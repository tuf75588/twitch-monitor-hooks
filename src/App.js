import React, { useContext, useReducer, useState, useEffect } from 'react';
import { reducer } from './reducers/index';
import { Store } from './context/index';
import ChannelContainer from './components/ChannelContainer';
import { getStreamData } from './utils/API';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  padding: 2em;
  color: #fff;
  text-align: center;
  background: ${(props) => props.background};
`;

function App(props) {
  // create our applications global state reference.
  const globalState = useContext(Store);
  // create our reducer using our global state to get access to state and dispatch.
  const [state, dispatch] = useReducer(reducer, globalState);
  useEffect(() => {
    getStreamData().then((res) => {
      return Promise.all(res).then((info) => {
        dispatch({ type: 'LOAD_CHANNELS', payload: info });
      });
    });
  }, []);

  return (
    <Store.Provider value={{ state, dispatch }}>
      <>
        <StyledHeader background="cornflowerblue">
          <h1 style={{ fontWeight: 100 }}>Twitch.tv Channel Monitor</h1>
        </StyledHeader>

        <ChannelContainer />
      </>
    </Store.Provider>
  );
}

export default App;
