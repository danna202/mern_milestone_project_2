// import { useState, useEffect } from 'react';
// import fetch from 'node-fetch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import WantedCard from './components/WantedCard';
// import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import UserInfo from './components/UserInfo'
import SignIn from './components/SignIn';

function App() {

  // mock data
  const user = {
    name: 'Hannah Mills',
    email: 'millsh@email.com',
    username: 'millshg',
    location: 'North Carolina, USA',
  }

  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/profile" element={<UserInfo user={user}/>} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
  
    </Router>
  );
}

export default App;




