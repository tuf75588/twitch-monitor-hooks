import React, { useEffect, useState, useContext } from 'react';
import { searchChannel } from '../utils/API';
import styled from '@emotion/styled';
import { Store } from '../context';

const StyledButtons = styled.button`
  padding: 0.5em;
  height: 50px;
  width: 100px;
  font-size: 1em;
  background: #fff;
  color: #000;
  margin: 5px;
  border: 0.5px solid lightgrey;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: ${(props) => (props.active ? 'lightblue' : 'white')};
`;

function ChannelForm(props) {
  const { dispatch, state } = useContext(Store);
  console.log(state);

  function handleOnlineClick() {
    const onlineChannels = [...state.streamData].filter(stream => stream[1].stream !== null);
    dispatch({ type: 'CHANGE_ONLINE', payload: onlineChannels, filter: 'Online' });
  }
  function handleOfflineClick() {
    const offlineChannels = [...state.streamData].filter(stream => stream[1].stream === null);
    dispatch({ type: 'CHANGE_OFFLINE', payload: offlineChannels, filter: 'Offline' });
  }

  return (
    <div>
      <div className='button-row' style={{ textAlign: 'center' }}>
        <StyledButtons  active={state.filter === 'All'}>
          All
        </StyledButtons>
        <StyledButtons onClick={handleOnlineClick} active={state.filter === 'Online'}>
          Online
        </StyledButtons>
        <StyledButtons onClick={handleOfflineClick} active={state.filter === 'Offline'}>Offline</StyledButtons>
      </div>
      <input />
    </div>
  );
}
export default ChannelForm;
