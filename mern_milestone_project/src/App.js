// import { useState, useEffect } from 'react';
// import fetch from 'node-fetch';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import WantedCard from './components/WantedCard';
// import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
    <Router>
      <Routes>
        <Route path="/profile" component={UserProfile} />
        <Route path="/gallery" component={Gallery} />
      </Routes>
    </Router>
    </BrowserRouter>
  );
}

export default App;




