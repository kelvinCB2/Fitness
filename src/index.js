// Asi lo haciamos antes

// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

// Asi lo hace react ahora

import React from 'react'
import ReactDOM from 'react-dom'


const name = 'Kelvin'

const user = {

  firstName: "Kelvin",
  lastName: "Calcano",
  avatar: "http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png"

}

function getName(user) {
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>
  } else {
    return <h1>Hello Stranger</h1>
  }
}

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}></img>
  </div>
)
const container = document.getElementById('root')

// ReactDOM.render(Que Renderear, Donde Renderear)

ReactDOM.render(element, container)