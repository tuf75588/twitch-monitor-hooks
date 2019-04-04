import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FlipMove from 'react-flip-move';
import { Store } from '../context/';
const StyledChannel = styled.div`
  width: 600px;
  border: 1px solid black;
  margin: 5px 0;
  border-radius: 5px;
  display: flex;
  background-color: ${(props) => (props.online ? 'lightblue' : '#fff')};
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 5px;
`;

function StyledChannelList(props) {
  const { state, dispatch } = useContext(Store);

  return (
    <div>
      {state.streamData.map((stream) => {
        let channelInfo = stream[0];
        let streamInfo = stream[1];
        const status =
          streamInfo.stream === null
            ? 'Offline'
            : `Online streaming ${streamInfo.stream.game} for ${streamInfo.stream.viewers} viewers!`;

        return (
          <FlipMove appearAnimation='accordionHorizontal'>
            <div style={{ display: 'flex' }}>
              <StyledChannel online={status !== 'Offline'}>
                <StyledImage src={channelInfo.logo} />
                <div>
                  <h3 style={{ fontWeight: 100, paddingLeft: 5 }}>{channelInfo.display_name}</h3>
                  <div>
                    <h3 style={{ fontWeight: 100, paddingLeft: 5 }}>Currently: {status} </h3>
                  </div>
                </div>
              </StyledChannel>
            </div>
          </FlipMove>
        );
      })}
    </div>
  );
}

function ChannelList(props) {
  return (
    <div>
      <StyledChannelList />
    </div>
  );
}

export default ChannelList;
