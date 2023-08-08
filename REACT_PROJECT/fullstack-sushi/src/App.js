import React from 'react';
// import Navbar from "./components/navbar";
import Canvas_Navbar from "./components/Canvas_Navbar"
import Slider from './components/Slider';
import './App.css';

function App() {
  return (
    <>
    <div className="container">
      <div className="gradient-overlay" />
      <Canvas_Navbar />
      <div className="container-2">
        <h1 className="container-fluid">SAMPLE</h1>
      </div>
      <Slider />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    </>
  );
}

export default App;
