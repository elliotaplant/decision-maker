import React from 'react';
import styled from 'styled-components';

const ChoiceInput = styled.input`
  display: block;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: none;
  border: 2px solid ${props => props.theme.primaryColor}
  padding: 10px;
  margin-bottom: 10px;
  font-size: ${props => props.theme.fontSize1}

  &:focus {
    outline: none;
  }
`;

const ChoiceButton = styled.button `
  cursor: pointer;
  padding: 10px;
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: ${props => props.theme.borderRadius};
  margin: 0 10px;
  font-size: ${props => props.theme.fontSize1}

  &:hover {
    background: ${props => props.theme.primaryColor};
  }

  &:focus {
    outline: none;
  }
`;

const DecisionChoicesDivider = styled.hr`
  height: 1px;
  border: 0;
  border-bottom: 1px solid #bbb;
  width: 100px;
  margin: 20px auto;
`

const AddChoices = (props) => {

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      props.addChoice();
    }
  }

  return (
    <div>
      <h4>To get started, add your choices here:</h4>
      <ChoiceInput
        placeholder="Type option here"
        onChange={props.updateChoice}
        value={props.choice}
        onKeyPress={handleEnterKey}/>
      <ChoiceButton onClick={props.addChoice}>Add Option</ChoiceButton>
      {props.choices.length > 1 && <ChoiceButton onClick={props.transitionToDeciding}>Start Deciding</ChoiceButton>}
      <DecisionChoicesDivider />
      {props.choices.map(choice => <div key={choice}>{choice}</div>)}
    </div>
  )

}

export default AddChoices;
