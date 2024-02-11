import { useState } from 'react'

function Track() {
  const [trackName, setTrackName] = useState('track name will go here');
  const [trackArtist, setTrackArtist] = useState('track artist will go here');
  const [trackAlbum, setTrackAlbum] = useState('track album will go here');
  const [trackRemoval, setTrackRemoval] = useState(false);
  

  return (
    <div className="Track">
        <div className="Track-information">
            <h3>track name will go here</h3>
            <p>{"track artist will go here"} {"track album will go here"}</p>
        </div>
        <button className="Track-action">{trackRemoval ? '-' : '+'}</button>
    </div>
  )
}

export default Track;