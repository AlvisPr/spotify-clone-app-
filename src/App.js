import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js'; // Importing Spotify web appi 
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi(); //setting up a new instance of object 


function App() {

   console.log(spotify); 
   const [{user, token}, dispatch] = useDataLayerValue(); //Pulling out information from data layer

   //Run code based on given condition  
   useEffect(()=>{
    const hash = getTokenFromUrl(); 
    window.location.hash = "";
    
    const _token = hash.access_token; 


    if(_token){
      dispatch({
        type: 'SET_TOKEN', 
        token: _token 
      }); 
 
    spotify.setAccessToken(_token); // now we can set up the token inside the spotify object 
    spotify.getMe().then(user => {
      console.log('SHOW ME THR USER', user); 
      console.log(spotify.__proto__); 
     dispatch({
      type: 'SET_USER', 
      user:user
     });
    });


    spotify.getUserPlaylists().then((playlists)=> {
      console.log(playlists); 
      dispatch({
        type: "SET_PLAYLISTS", 
        playlists: playlists
      }); 
     });

    spotify.getPlaylist('37i9dQZEVXcV9l0trIB2UV').then(response => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY", 
        discover_weekly: response
      })
    }
      
      )



    }
   }, []);
   

   console.log('🧔' , user); 
   console.log('🎅', token);

  return (
    <div className="app">
     {token?(<Player spotify={spotify}/>) : (<Login/>)}
    </div>
  );
}

export default App;
