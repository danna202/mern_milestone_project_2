import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch';
import WantedCard from './WantedCard'; 
import SearchBar from './SearchBar';

function Gallery() {
  const [wanted, setWanted] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.fbi.gov/wanted/v1/list')
      const data = (await response.json());
     console.log(data.items);
       setWanted(data.items);
  })();
}, []);

  return (
    <div className="gallery">
        <SearchBar/>
      { wanted.length >= 1 ?     
        wanted.map((criminal) => {
                return (
                  <React.Fragment key={criminal.title}>
                  <WantedCard name={criminal.title} description={criminal.description} warning={criminal.warning_message} url = {criminal.url} img = {criminal.images.original} reward = {criminal.reward_text}/>
                  </React.Fragment>
          )
        })
      
        : <div>I have no results!</div>
    }
  </div>
  );
}

export default Gallery;