import { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WantedCard from './components/WantedCard';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';

function App () {

return(
  <div className='App'>
    <Gallery/>
  </div>
);
}



export default App;




