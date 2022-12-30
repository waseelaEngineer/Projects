import React from 'react'

export default function Card(props) {
  return (
    <>
      { props.cardInfo.map(function(person){
        return (
          <div key={person.Id} className={props.className}>
            <p >Name: { person.Name } </p>
            <p >Age: { person.Age } </p>
            <p >Hoppies: { person.Hoppies } </p>
          </div> 
        )
      }) }
    </>
  )
}