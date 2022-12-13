import React from 'react';

function Button(props) {
  const {content, bttClass, gridName, operation, setOperation, setResult} = props;

  //when press the button what to do
  const action = (element) => {
    switch (element) {
      case "=" : // Do the operation
        setResult(eval(operation))
        break;
      case "C" : // Clear the operation
        setOperation("");
        setResult("")
        break;
      case "<-" : // Delete last char
        setOperation(operation.slice(0, -1));
        break;
      case "+/-" : // Change the sinal
        if (operation.charAt(0) === "-") setOperation(operation.slice(1))
        else setOperation("-" + operation);
        break;
      default : // add to the operation
        setOperation(operation + `${element}`)
        break;
    }
  }

  return <button onClick={() => action(content)} className={bttClass} style={{gridArea:gridName}}>
      {content}
  </button>;
}

export default Button;