import React from 'react'
// import TrackList from 'src/components/TrackList';
import { TrackList } from 'components';


function PlayList() {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} />
      {/* <TrackList /> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
  </div>
  )
}

export default PlayList;