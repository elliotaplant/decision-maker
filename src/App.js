import React, {Component} from 'react';
import './App.css';
import AddChoices from './AddChoices';
import CompareChoices from './CompareChoices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: '',
      choices: [
        '1A 9 MED SURG NEURO - EM VACATION * FM/ PC PEDS OB/ GYN PSYCH',
        '1B 8 MED SURG EM - NEURO VACATION PEDS * FM/ PC PSYCH OB/ GYN'
      ],
      addingChoices: false,
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
    const choices = [
      ...this.state.choices,
      this.state.choice,
    ];
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
      return this.state.sorted.map(choice => (<div key={choice}>{choice}</div>));
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Decision Maker 5000</h1>
        </header>
        {this.lowerHalf()}
      </div>
    );
  }
}

export default App;
