import React, {Component} from 'react';
import asyncMergeSort from 'async-merge-sort';
import styled from 'styled-components';

const Choice = styled.div `
  cursor: pointer;
  padding: 10px;
  border: 2px solid aliceblue;
  border-radius: 3px;
  margin: 0 10px;


  &:hover {
    background: aliceblue;
  }
`;

const ChoiceContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

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
    asyncMergeSort(this.props.choices, (choiceA, choiceB, sortOrder) => {
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
        <ChoiceContainer>
          <Choice onClick={this.state.chooseA}>{this.state.showingChoices.a}</Choice>
          <Choice onClick={this.state.chooseB}>{this.state.showingChoices.b}</Choice>
        </ChoiceContainer>
      </div>
    );
  }
}

export default CompareChoices;
