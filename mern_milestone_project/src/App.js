import { useState, useEffect } from 'react'
import fetch from 'node-fetch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import WantedCard from './components/WantedCard';
import SearchBar from './components/SearchBar'


function App () {

  const [wanted, setWanted] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.fbi.gov/wanted/v1/list')
      const data = (await response.json());
     console.log(data.items);
       setWanted(data.items);
  })();
}, []);

return(
  <div className = 'App'> 
    { wanted.length >= 1 ?     
        wanted.map((criminal) => {
                return (
                  <fragment>
                  <SearchBar/>
                  <WantedCard name={criminal.title} />
                  </fragment>
          )
        })
      
        : <div>I have no results!</div>
    }
  </div>
);
}



export default App;




