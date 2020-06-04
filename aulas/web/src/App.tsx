import React, {useState} from 'react';
import './App.css';
import  Header from './Header'; 

//JSX : Sintaxe  dentro do XML do Javascript
function App() {
  let [counter,setCounter] = useState(0); //

  function handlerButton(){
  //  console.log(counter);
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello Word"/> 
        <h1>{counter}</h1>
        <button type="button" onClick={handlerButton}>Aumentar </button>

    </div>
  );
}

export default App;
