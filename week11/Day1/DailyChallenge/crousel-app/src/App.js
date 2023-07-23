import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
  const images = [
    'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg',
    'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp',
    'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp',
    'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp',
  ];
  return (
    <div className="App">
      <div>
      <h1>React Carousel Example</h1>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Carousel Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
    </div>
  );
}

export default App;
