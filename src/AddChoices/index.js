import React, {Component} from 'react';
import styled from 'styled-components';

const ChoiceInput = styled.input `
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

const DecisionChoicesDivider = styled.hr `
  height: 1px;
  border: 0;
  border-bottom: 1px solid #bbb;
  width: 100px;
  margin: 20px auto;
`

class AddChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: ''
    }

    this.addChoice = this.addChoice.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.rosalindFranklin = this.rosalindFranklin.bind(this);
  }

  updateChoice(e) {
    this.setState({choice: e.target.value});
  }

  handleEnterKey(e) {
    if (e.key === 'Enter') {
      this.addChoice();
    }
  }

  addChoice() {
    this.props.addChoice(this.state.choice);
    this.setState({choice: ''});
  }

  rosalindFranklin() {}

  render() {
    return (
      <div>
        <h4>To get started, add your choices here:</h4>
        <ChoiceInput
          placeholder="Type option here"
          onChange={this.updateChoice}
          value={this.state.choice}
          onKeyPress={this.handleEnterKey}/>
        <ChoiceButton onClick={this.addChoice}>Add Option</ChoiceButton>
        {this.props.choices.length > 1 && <ChoiceButton onClick={this.props.transitionToDeciding}>Start Deciding</ChoiceButton>}
        <ChoiceButton onClick={this.rosalindFranklin}>I'm from Rosalind Franklin</ChoiceButton>
        <DecisionChoicesDivider/> {this.props.choices.map(choice => <div key={choice}>{choice}</div>)}
      </div>
    );
  }

}

export default AddChoices;
