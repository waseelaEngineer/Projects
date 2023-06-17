import React, { useState } from 'react';
import './App.css';
import Rigister from './Rigister';
import Card from './Card';

function App() {

  const [ inputValue, setInputValue] = useState({
    name: "",
    age: "",
    hoppies: "",
  });

  const [ cardInfo, setCardInfo] = useState([]);

  function nameInput(e){
    setInputValue({...inputValue, name: e.target.value})
  }
  function ageInput(e){
    setInputValue({...inputValue, age: e.target.value})
  }
  function hoppiesInput(e){
    setInputValue({...inputValue, hoppies: e.target.value})
  }

  function AddButton(){
    const Id = Math.floor(Math.random()*100000)
    setCardInfo([...cardInfo, {
      Id: Id,  
      Name: inputValue.name,
      Age: inputValue.age,
      Hoppies: inputValue.hoppies
    }]) 
  }console.log(cardInfo)

  return (
    <>
      <Rigister 
        className='rigister-Container'
        inputValue={inputValue} 
        nameInput={nameInput} 
        ageInput={ageInput} 
        hoppiesInput={hoppiesInput}
        AddButton={AddButton}
      />


      <Card className='card-Container' cardInfo={cardInfo}/>
    </>
  );
}
export default App;