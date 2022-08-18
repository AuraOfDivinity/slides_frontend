import React, { useState, useEffect } from 'react';
import './App.css';
import Slider from './components/Carousel/Carousel';
import axios from "axios";

const ImageData = [
  {
    image:
      "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1"
  },
  {
    image:
      "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1"
  },
  {
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1"
  },
  {
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1"
  }
];

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
