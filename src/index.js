// Asi lo haciamos antes

// const element = document.createElement('h1')
// element.innerText = 'Hello React'
// const container = document.getElementById('root')
// container.appendChild(element)

// Asi lo hace react ahora

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

// ReactDOM.render(Que Renderear, Donde Renderear)
ReactDOM.render(<Card
  title="This is my title"
  description="Learn amazing street workout and calisthenics"
  image="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
  leftColor="#A74CF2"
  rightColor="#617BFB"
/>, container)