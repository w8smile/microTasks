import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // const myFirstSubscriber = () => {
    //     console.log("I am Vasya!")
    // }
    //
    // const secondSubscriber = () => {
    //     console.log("I am Petya!")
    // }


    const onClickHandler = (name:string) => {
        console.log(name)
    }
// const foo2 =(num:number) => {
//     console.log(num)
//
// }
//
//     const foo1 = ()=> {
//         console.log(100200)
//     }
  return (
    <div className="App">
      <button onClick={(event)=>{console.log("Ivan!")}}>MyYouTubeChanel-1</button>
      <button onClick={(event)=>onClickHandler("Vasya")}>MyYouTubeChanel-2</button>
      {/*  <button onClick={foo1}>1</button>*/}
      {/*  <button onClick={()=>foo2(10200)}>2</button>*/}
    </div>
  );
}

export default App;
