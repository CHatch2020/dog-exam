
import { useState } from 'react'
import "./App.css"

function App() {

  //error during page reload: Uncaught ReferenceError: process is not defined ?

  const url = 'https://dog.ceo/api/breeds/image/random'

  return (
    <div className="App">
      <div className="container">Dogs go here...</div>
    </div>
  )
}

export default App
