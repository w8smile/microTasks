import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Simulate} from "react-dom/test-utils";
import reset = Simulate.reset;

function App() {

    let[a,setA]=useState(1)

    const Reset =()=>{
        setA(a=0)
        console.log((a))
    }
  const onClickHandler =() => {
      setA(++a);
      console.log((a))
  }



  return (
    <div className="App">
      <h1>{a}</h1>
      <button onClick={onClickHandler}>number</button>
      <button onClick={Reset}>0</button>
    </div>
  );
}

export default App;
