import React, {Component} from 'react';
import './App.css';
import AddChoices from './AddChoices';
import CompareChoices from './CompareChoices';
import SortedChoices from './SortedChoices';
import styled from 'styled-components';

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const AppHeader = styled.header `
  background-color: #222;
  padding: 20px;
  color: white;
  margin-bottom: 3vh;
`;

const LowerHalfContainer = styled.div `
  max-width: 850px;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: '',
      choices: [],
      addingChoices: true,
      sorted: null,
    };
    this.updateChoice = this.updateChoice.bind(this);
    this.addDecision = this.addDecision.bind(this);
    this.transitionToDeciding = this.transitionToDeciding.bind(this);
    this.showSorted = this.showSorted.bind(this);
  }

  updateChoice(e) {
    this.setState({choice: e.target.value});
  }

  addDecision() {
    let choices = [
      ...this.state.choices,
      this.state.choice,
    ];
    choices = Array.from(new Set(choices));
    this.setState({choice: '', choices});
  }

  transitionToDeciding() {
    this.setState({addingChoices: false});
  }

  showSorted(sorted) {
    this.setState({sorted});
  }

  lowerHalf() {
    if (this.state.sorted) {
      return <SortedChoices choices={this.state.sorted}/>;
    } else if (this.state.addingChoices) {
      return <AddChoices
        updateChoice={this.updateChoice}
        addDecision={this.addDecision}
        transitionToDeciding={this.transitionToDeciding}
        choices={this.state.choices}
        choice={this.state.choice}/>;
    } else {
      return <CompareChoices choices={this.state.choices} showSorted={this.showSorted}/>;
    }
  }

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <h1 className="App-title">Decision Maker 5000</h1>
        </AppHeader>
        <LowerHalfContainer>
          {this.lowerHalf()}
        </LowerHalfContainer>
      </AppContainer>
    );
  }
}

export default App;
