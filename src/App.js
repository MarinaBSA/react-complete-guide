import React, { Component } from 'react'
// import React, { useState } from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {
  state = {
    people: [
      { name: 'John Doe', age: 28 },
      { name: 'Jane Doe', age: 25 }
    ],
    country: ''
  }

  switchNameHandler = (people) => {
    this.setState({
      people: [
        { name: people.first.name, age: people.first.age },
        { name: 'Maria Mustermann', age: 25 }
      ]
    })
  }

  showCountryHandler = (event) => {
    // const pressedCharCode = event.charCode
    /* if (pressedCharCode === 13) {
      this.setState(
        // { country: document.querySelector('#input').value }
        { country: event.target.value }
      )
    } */
    this.setState(
      // { country: document.querySelector('#input').value }
      { country: event.target.value }
    )
  }

  render () {
    return (
      <div className="App">
        <p> React App</p>
        <small>Random number: {Math.floor(Math.random() * 10)}</small>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} country={ this.state.country } showCountry={this.showCountryHandler}>My Hobby is having no hobby</Person>
        <Person name={this.state.people[1].name} age={this.state.people[1].age} country={ this.state.country } showCountry={this.showCountryHandler}/>
        <button onClick={this.switchNameHandler.bind(this, { first: { name: 'Max Mustermann', age: 28 } })}>Change names</button>
        <br/><br/>
      </div>
    )
    //  return React.createElement('div', {className: 'App'}, React.createElement('p', '', 'React App'));
  }
}

export default App

// React Hook -> functional state management
// useState returns an array -> first element is the current state, second element is a function to manage the state(no merge, but replacement of old state entirely)
/* const App = props => {
  const [peopleState, setPeopleState] = useState({
    people: [
      { name: 'John Doe', age: 28 },
      { name: 'Jane Doe', age: 25 }
    ],
    country: ''
  })

  const [otherState] = useState('other state')

  console.log(peopleState, otherState)

  const showCountryHandler = (event) => {
    const pressedCharCode = event.charCode
    if (pressedCharCode === 13) {
      setPeopleState(
        { country: document.querySelector('#input').value }
      )
    }
  }

  const switchNameHandler = () => {
    setPeopleState({
      people: [
        { name: 'Max Mustermann', age: 28 },
        { name: 'Maria Mustermann', age: 25 }
      ]
    })
  }

  return (
    <div className="App">
      <p>React App</p>
      <small>Random number: {Math.floor(Math.random() * 10)}</small>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} click={switchNameHandler}>My Hobby is having no hobby</Person>
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}/>
      <button onClick={switchNameHandler}>Change names</button>
      <br/><br/>
      <input type="text" placeholder="Country" onKeyPress={showCountryHandler} id="input"/>
      <p>I am from: {peopleState.country}</p>
    </div>
  )
  //  return React.createElement('div', {className: 'App'}, React.createElement('p', '', 'React App'));
} */
