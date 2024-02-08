import React from 'react';
import './Footer.css'; 
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';


function Footer() {
  return (
    <div className='footer'> 


    <div className='footer__left'>
     <img  className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d00004851cae3820c17b6ec6ad38c1fd8" alt="" />
      <div className="footer__songInfo">
        <h4>Close To You</h4>
        <p>KSHMR, Maddix</p>
      </div>
    </div>

    <div className='footer__center'>
    <ShuffleIcon className="footer__green"/>
    <SkipPreviousIcon className='footer__icon'/>
    <PlayCircleOutlineIcon fontSize='large' className='footer__icon'/>
    <SkipNextIcon className='footer__icon'/>
    <RepeatIcon className='footer__green'/>
    </div>

    <div className='footer__right'>
    <Grid container spacing ={2}>
       <Grid item>
        <PlaylistPlayIcon/>
       </Grid>
       <Grid item>
         <VolumeDownIcon/>
       </Grid>
       <Grid item xs>
         <Slider  aria-labelledby="continuous-slider"/>
       </Grid>
      </Grid>    
    </div>


    </div>
  )
}

export default Footer