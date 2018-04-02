import React from 'react';
import styled from 'styled-components';

const Choice = styled.li `
  margin-bottom: 3px;
`;
const TryAgainButton = styled.button `
  cursor: pointer;
  padding: 10px;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: ${props => props.theme.borderRadius};
  margin: 10px;
  font-size: ${props => props.theme.fontSize1}

  &:hover {
    background: ${props => props.theme.primaryColor};
  }

  &:focus {
    outline: none;
  }
`;


const SortedChoices = (props) => (
  <div>
    <h4>Your choices, from most favorite to least favorite:</h4>
    <ol>
      {props.choices.map(choice => <Choice key={choice}>{choice}</Choice>)}
    </ol>
    <TryAgainButton onClick={props.tryAgain}>Make Another Decision</TryAgainButton>
  </div>
);

export default SortedChoices;
