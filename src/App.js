import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './components/Carousel/Carousel';

const App = () => {
  const [slides, setSlides] = useState([]);
  useEffect(()=> {
    fetch(`http://localhost:3600/carousels?count=5`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data.data);
       setSlides(data.data);
    })
    .catch((err) => {
       console.log(err.message);
    });
  }, [])

return (
  <div className="App">
    <Slider slides={slides}/>
  </div>
);
};

export default App
