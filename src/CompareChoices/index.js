import React, {Component} from 'react';
import asyncMergeSort from 'async-merge-sort';

class CompareChoices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingChoices: {
        a: null,
        b: null,
      },
      chooseA: null,
      chooseB: null
    }
  }

  componentDidMount() {
    asyncMergeSort(props.choices, (choiceA, choiceB, sortOrder) => {
      this.setState({
        showingChoices: {
          a: choiceA,
          b: choiceB,
        },
        chooseA: () => sortOrder(null, 1),
        chooseB: () => sortOrder(null, -1),
      });
    }, (error, sorted) => {
      if (error) {
        console.error(error);
      }
      this.props.showSorted(sorted);
    });
  }

  render() {
    return (
      <div>
        <p>Click the choice you prefer</p>
        <div onClick={this.state.chooseA}>{this.state.showingChoices.a}</div>
        <div onClick={this.state.chooseB}>{this.state.showingChoices.b}</div>
      </div>
    );
  }
}

export default CompareChoices;
