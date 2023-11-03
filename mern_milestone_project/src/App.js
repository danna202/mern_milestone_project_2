import { useState, useEffect } from 'react'
import fetch from 'node-fetch';
import ReactDOM from 'react-dom';
import WantedCard from './components/WantedCard';


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
                  <WantedCard name={criminal.title} />

          )
        })
      
        : <div>I have no results!</div>
    }
  </div>
);
}



export default App;




