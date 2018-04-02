import React from 'react';
import styled from 'styled-components';

const ChoiceInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 3px;
  box-shadow: none;
  border: 2px solid aliceblue
  padding: 10px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize1}
`;

const ChoiceButton = styled.button `
  cursor: pointer;
  padding: 10px;
  border: 2px solid aliceblue;
  border-radius: 3px;
  margin: 0 10px;
  font-size: ${props => props.theme.fontSize1}

  &:hover {
    background: aliceblue;
  }
`;

const DecisionChoicesDivider = styled.hr`
  height: 1px;
  border: 0;
  border-bottom: 1px solid #bbb;
`

const AddChoices = (props) => {

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      props.addDecision();
    }
  }

  return (
    <div>
      <h4>To get started, add your choices here:</h4>
      <ChoiceInput
        placeholder="Add Option"
        onChange={props.updateChoice}
        value={props.choice}
        onKeyPress={handleEnterKey}/>
      <ChoiceButton onClick={props.addDecision}>Add Choice</ChoiceButton>
      <ChoiceButton onClick={props.transitionToDeciding}>Start Deciding</ChoiceButton>
      <DecisionChoicesDivider />
      {props.choices.map(choice => <div key={choice}>{choice}</div>)}
    </div>
  )

}

export default AddChoices;
