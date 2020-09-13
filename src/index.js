// Asi lo haciamos antes

// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

// Asi lo hace react ahora

import React from 'react'
import ReactDOM from 'react-dom'

const element = <h1>Hello React</h1>
const container = document.getElementById('root')

// ReactDOM.render(Que Renderear, Donde Renderear)

ReactDOM.render(element,container)