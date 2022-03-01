
import { useState } from 'react'
import "./App.css"

function App() {

  //error during page reload: Uncaught ReferenceError: process is not defined ?

  const url = 'https://dog.ceo/api/breeds/image/random'

  const [images, setImages] = useState([])

  const apiFetch = (path) => {
    return fetch(path, {
      method: "GET",
    }).then(res => {
      Promise.all([...images, res.json()]).then((values) => {
        setImages(values)
      });
    })
  }

  return (
    <div className="App">
      <div className="container">Dogs go here...</div>
      <button type="submit" onClick={() => apiFetch(url)}>Add Dog</button>
      {images.length ? <div>
        {images.map((image, idx) => {
          return <img key={idx} src={image.message} width="100" height="100" alt='dog' />
        })}
      </div> : <div>no dog images</div>}
    </div>
  )
}

export default App
