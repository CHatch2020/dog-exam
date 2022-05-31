
import { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css"

function App() {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const [newDog, setNewDog] = useState([]);

  // useEffect(() => {
  //   buttonClick();
  // },[])

  const buttonClick = async() => {
    try {
      const response = await axios.get(url)
      console.log('Should get a response', response);
      setNewDog([...newDog, response.data.message]);
    } catch(err) {
      console.log('Not getting data properly', err);
    }}

    console.log('Should have data on click', newDog);
    

  return (
    <div className="App">
      <div className="container">Dogs go here...</div>
      <button onClick={buttonClick}>Dogs</button>
      {
        newDog.map((dog) => {
          return (
            <div>
              <img src={dog}/>
            </div>
          );
        })
      }
    </div>
  )
}

export default App
