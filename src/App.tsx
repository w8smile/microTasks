import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1foo=(subscriber:string, age:number, adress: string)=>{
        console.log(subscriber, age, adress)
    }
    const Button2foo=(subscriber:string, age:number)=>{
        console.log(subscriber, age)
    }
    const StupidButton = ()=>{
        console.log('Iam stupid button')
    }


    return (
    <div className="App">
        <Button name={"MyYouTubeChannel-1"} callback={()=>Button1foo("Iam Vasya",21,"live in Krichev")}/>
        <Button name={"MyYouTubeChannel-2"} callback={()=>Button2foo("Iam Ivan",22)}/>
        <Button name={'StupidButton'} callback={StupidButton}/>

    </div>
  );
}

export default App;
