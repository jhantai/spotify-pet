import React ,{ useState,useRef }from 'react';
import Player from "../../modules/musicPLayer/musicPlayeer";
import TrackList from '../../modules/musicPLayer/TrackLIst';
import tracks from '../../modules/musicPLayer/tracks';

const PlayerFinal = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handleTrackSelect = (index) => {
    if (currentTrackIndex === index) {
      // Если текущий трек уже выбран, переключаем состояние воспроизведения
      setIsPlaying(!isPlaying);
    } else {
      // Если выбран новый трек, переключаем на него и запускаем воспроизведение
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
    setIsPlayerVisible(true); // Показываем плеер при выборе трека
  };
  const hidePlayer = () => {
    setIsPlayerVisible(false);
  };
    return (
        <div className='components'>
            <TrackList tracks={tracks} onTrackSelect={handleTrackSelect} />
            <Player
              tracks={tracks}
              currentTrackIndex={currentTrackIndex}
              setCurrentTrackIndex={setCurrentTrackIndex}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              isPlayerVisible={isPlayerVisible}
              hidePlayer={hidePlayer}
            />
        </div>
    );
};

export default PlayerFinal;