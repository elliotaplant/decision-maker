import React, {Component} from 'react';
import './App.css';
import AddChoices from './AddChoices';
import CompareChoices from './CompareChoices';
import SortedChoices from './SortedChoices';
import styled, {ThemeProvider} from 'styled-components';


const theme = {
  fontSize1: '25px',
  borderRadius: '10px',
  primaryColor: '#ADD8E6',
};

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
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: [],
      addingChoices: true,
      sorted: null
    };
    this.addChoice = this.addChoice.bind(this);
    this.transitionToDeciding = this.transitionToDeciding.bind(this);
    this.showSorted = this.showSorted.bind(this);
  }


  addChoice(choice) {
    console.log('choice', choice);
    this.setState(state => {
      let choices = [
        ...state.choices,
        choice,
      ];
      choices = Array.from(new Set(choices));
      return {choices};
    });
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
        addChoice={this.addChoice}
        transitionToDeciding={this.transitionToDeciding}
        choices={this.state.choices}/>;
    } else {
      return <CompareChoices choices={this.state.choices} showSorted={this.showSorted}/>;
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <AppHeader>
            <h1 className="App-title">Decision Maker 5000</h1>
          </AppHeader>
          <LowerHalfContainer>
            {this.lowerHalf()}
          </LowerHalfContainer>
        </AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;
