import React from 'react'
// props: Information passed from parent element to child element

const Person = (props) => {
  return (
    <div>
      <p onClick={props.click}>Name: {props.name} Age: {props.age}</p>
      <small>{props.children}</small>
      <br/>
      <input type="text" placeholder="Country" onChange={props.showCountry} id="input"/>
      <p>I am from: {props.country}</p>
    </div>
  )
}

export default Person
