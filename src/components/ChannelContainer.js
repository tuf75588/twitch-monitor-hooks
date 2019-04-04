import React from 'react';
import styled from '@emotion/styled';
import ChannelList from './ChannelList';
import ChannelForm from './ChannelForm';

const StyledParent = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const StyledContainerSection = styled.section`
  max-width: 1200px;
  margin: 5px;
  padding: 5px;
`;

function ChannelContainer(props) {
  return (
    <StyledParent>
      <StyledContainerSection>
        <ChannelForm />
        <ChannelList />
      </StyledContainerSection>
    </StyledParent>
  );
}
export default ChannelContainer;
