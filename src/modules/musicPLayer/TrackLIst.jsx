import React from 'react';
import "./musicPlayer.css"

const TrackList = ({ tracks, onTrackSelect }) => {
  return (
    <div className="track-list">
      {tracks.map((track, index) => (
        <div key={index} onClick={() => onTrackSelect(index)} className="track">
          <button className='title-button'>{track.title}</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
