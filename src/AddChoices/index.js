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

  rosalindFranklin() {
    [
      '1A 9  MED(8) SURG(8) NEURO-EM(8) VACATION FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6)',
      '1B 8  MED(8) SURG(8) EM-NEURO(8) VACATION PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6)',
      '1C 9  SURG(8) MED(8) NEURO-EM(8) VACATION OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6)',
      '1D 8  SURG(8) MED(8) EM-NEURO(8) VACATION PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6)',
      '1E 8  NEURO-EM(8) MED(8) SURG(8) VACATION FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6)',
      '1F 8  EM-NEURO(8) MED(8) SURG(8) VACATION PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6)',
      '1G 9  NEURO-EM(8) SURG(8) MED(8) VACATION OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6)',
      '1H 8  EM-NEURO(8) SURG(8) MED(8) VACATION PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6)',
      '1J 9  SURG(8) NEURO-EM(8) MED(8) VACATION FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6)',
      '1K 8  SURG(8) EM-NEURO(8) MED(8) VACATION PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6)',
      '1L 8  MED(8) NEURO-EM(8) SURG(8) VACATION OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6)',
      '1M 9  MED(8) EM-NEURO(8) SURG(8) VACATION PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6)',
      '2A 9  OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6) VACATION MED(8) SURG(8) NEURO-EM(8)',
      '2B 8  PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6) VACATION MED(8) SURG(8) EM-NEURO(8)',
      '2C 8  OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6) VACATION SURG(8) MED(8) NEURO-EM(8)',
      '2D 9  PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6) VACATION SURG(8) MED(8) EM-NEURO(8)',
      '2E 8  FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6) VACATION NEURO-EM(8) MED(8) SURG(8)',
      '2F 8  PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6) VACATION EM-NEURO(8) MED(8) SURG(8)',
      '2G 8  FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6) VACATION NEURO-EM(8) SURG(8) MED(8)',
      '2H 8  PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6) VACATION EM-NEURO(8) SURG(8) MED(8)',
      '2J 8  FM/PC(6) PEDS(6) OB/GYN(6) PSYCH(6) VACATION SURG(8) NEURO-EM(8) MED(8)',
      '2K 9  PEDS(6) FM/PC(6) PSYCH(6) OB/GYN(6) VACATION SURG(8) EM-NEURO(8) MED(8)',
      '2L 9  OB/GYN(6) PSYCH(6) FM/PC(6) PEDS(6) VACATION MED(8) NEURO-EM(8) SURG(8)',
      '2M 8  PSYCH(6) OB/GYN(6) PEDS(6) FM/PC(6) VACATION MED(8) EM-NEURO(8) SURG(8)',
    ].forEach(option => this.props.addChoice(option));
    // this.props.transitionToDeciding();
  }

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
