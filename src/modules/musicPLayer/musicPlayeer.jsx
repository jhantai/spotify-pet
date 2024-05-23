import React, { useRef, useEffect, useState } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward, FaTimes } from 'react-icons/fa';

const Player = ({ tracks, currentTrackIndex, setCurrentTrackIndex, isPlaying, setIsPlaying, isPlayerVisible, hidePlayer }) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    const updateCurrentTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateCurrentTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [currentTrackIndex, isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  const handleTimeChange = (event) => {
    const audio = audioRef.current;
    const newTime = event.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={`player ${isPlayerVisible ? 'visible' : ''}`}>
      <h3>{currentTrack.title}</h3>
      <button className="close-button" onClick={hidePlayer}><FaTimes /></button>
      <audio ref={audioRef} src={currentTrack.src}></audio>
      <div className="time-info">
        <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
      </div>
      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleTimeChange}
      />
      <div className="controls">
        <button onClick={handlePreviousTrack}><FaBackward /></button>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleNextTrack}><FaForward /></button>
      </div>
    </div>
  );
};

export default Player;
