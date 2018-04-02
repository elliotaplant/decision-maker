import React from 'react';

const AddChoices = (props) => {

  function handleEnterKey(e) {
    if (e.key === 'Enter') {
      props.addDecision();
    }
  }

  return (
    <div>
      <p>
        To get started, add your choices here:
      </p>
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
