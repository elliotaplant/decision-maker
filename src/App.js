import React, {Component} from 'react';
import './App.css';
import AddChoices from './AddChoices';
import CompareChoices from './CompareChoices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: '',
      choices: [],
      addingChoices: true,
    };
    this.updateChoice = this.updateChoice.bind(this);
    this.addDecision = this.addDecision.bind(this);
    this.transitionToDeciding = this.transitionToDeciding.bind(this);
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Decision Maker</h1>
        </header>
        {
          this.state.addingChoices
            ? <AddChoices
                updateChoice={this.updateChoice}
                addDecision={this.addDecision}
                transitionToDeciding={this.transitionToDeciding}
                choices={this.state.choices}
                choice={this.state.choice}/>
            : <CompareChoices choices={this.state.choices}/>
        }
      </div>
    );
  }
}

export default App;
