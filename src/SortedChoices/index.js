import React from 'react';
import styled from 'styled-components';

const Choice = styled.li `
  margin-bottom: 3px;
`;

const SortedChoices = (props) => (
  <div>
    <h4>Your choices, from most favorite to least favorite:</h4>
    <ol>
      {props.choices.map(choice => <Choice key={choice}>{choice}</Choice>)}
    </ol>
  </div>
);

export default SortedChoices;
