import React from 'react';
import Header from "./Header";
import "./Body.css"; 
import {useDataLayerValue} from "./DataLayer"; 
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Songrow from './Songrow';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt="Discover_Weekly_Photo" />
        <div className='body__infoText'>
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon/>
        </div>
        <div className='songRowScroll'>
        {discover_weekly?.tracks.items.map(item=>(
          <Songrow track={item.track}/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Body; 
