import React from 'react'

export default function Rigister(props) {

  return (
    <>
      <div className={props.className}>
        <label>Name: </label>
        <input value={props.inputValue.name} onChange={props.nameInput}></input>

        <label>Age: </label>
        <input type="number" value={props.inputValue.age} onChange={props.ageInput}></input>

        <label>Hoppies: </label>
        <input value={props.inputValue.hoppies} onChange={props.hoppiesInput}></input>

        <button onClick={props.AddButton} >Add to cards</button>
        <br/><br/><br/><br/>
        <h1>
          this is a test to show that both screens are working perfectly
        </h1>
      </div>
    </>
  )
}