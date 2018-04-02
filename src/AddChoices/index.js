import React from 'react';

const AddChoices = (props) => {

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      props.addDecision();
    }
  }

  return (
    <div>
      <h4>To get started, add your choices here:</h4>
      <input
        placeholder="Add Option"
        onChange={props.updateChoice}
        value={props.choice}
        onKeyPress={handleEnterKey}/>
      <button onClick={props.addDecision}>Add Choice</button>
      <button onClick={props.transitionToDeciding}>Start Deciding</button>
      {props.choices.map(choice => <div key={choice}>{choice}</div>)}
    </div>
  )

}

export default AddChoices;
