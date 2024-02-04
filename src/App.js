import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi(); 
 

function App() {
  
   const [token, setToken] = useState(null); 

   //Run code based on given condition  
   useEffect(()=>{
    const hash = getTokenFromUrl(); 
    window.location.hash = ""; 
    const _token = hash.access_token; 
    if(_token){
    setToken(_token); 
    spotify.setAccessToken(_token); // now we can set up the token inside the spotify object 
    spotify.getMe().then(user => {
      console.log('SHOW ME THR USER', user); 
      console.log(spotify.__proto__); 
    })
    }

    
   }, []); 


  return (
    <div className="app">
     {token?(<Player/>) : (<Login/>)}
    </div>
  );
}

export default App;
