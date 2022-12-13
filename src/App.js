import React, { useState } from 'react';
import Button from './components/Button';
import Screen from './components/Screen';

function App() {
    const[operation , setOperation] = useState("");
    const[result, setResult] = useState("")

    return <>
      <div className='main'>
          <Screen operation={operation} result={result} />
          <div className='main__buttons'>
              <Button content={"1"} bttClass="main__buttons__normal" gridName={"a"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"2"} bttClass="main__buttons__normal" gridName={"b"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"3"} bttClass="main__buttons__normal" gridName={"c"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"4"} bttClass="main__buttons__normal" gridName={"d"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"5"} bttClass="main__buttons__normal" gridName={"e"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"6"} bttClass="main__buttons__normal" gridName={"f"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"7"} bttClass="main__buttons__normal" gridName={"g"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"8"} bttClass="main__buttons__normal" gridName={"h"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"9"} bttClass="main__buttons__normal" gridName={"i"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"0"} bttClass="main__buttons__normal" gridName={"j"} operation = {operation} setOperation = {setOperation}/>
              <Button content={","} bttClass="main__buttons__normal" gridName={"poi"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"%"} bttClass="main__buttons__func" gridName={"por"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"+"} bttClass="main__buttons__func" gridName={"plus"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"-"} bttClass="main__buttons__func" gridName={"minus"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"*"} bttClass="main__buttons__func" gridName={"multi"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"/"} bttClass="main__buttons__func" gridName={"divi"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"C"} bttClass="main__buttons__func" gridName={"clear"} operation = {operation} setOperation = {setOperation} setResult={setResult}/>
              <Button content={"="} bttClass="main__buttons__func" gridName={"equal"} operation = {operation} setOperation = {setOperation} setResult={setResult}/>
              <Button content={"+/-"} bttClass="main__buttons__func" gridName={"sinal"} operation = {operation} setOperation = {setOperation}/>
              <Button content={"<-"} bttClass="main__buttons__func" gridName={"delete"} operation = {operation} setOperation = {setOperation}/>
          </div>
      </div>
    </>;
}

export default App;