
import React from 'react'
import { useDataLayerValue } from './DataLayer';
import SidebarOption from './SidebarOption';
import "./Playlists.css"; 

function Playlists() {

    const[{playlists}, dispatch] = useDataLayerValue(); 

  return (
   <div className='playlists'>
     {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name}/>
      ))}
   </div>
  )
}

export default Playlists