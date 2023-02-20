import React, { useState, useRef } from 'react';
import IntroVideo from '../../assets/videos/react-video.mp4';
import poster from '../../assets/videos/react-poster.png';
import Wrapper, { PlayIconWrapper } from './styles';
import PlayIcon from '../../components/Svgs/Play';
import PauseIcon from '../../components/Svgs/Pause';

const Video = ({ className, ...rest }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <Wrapper className={className} {...rest} playing={isPlaying}>
      <img src={poster} alt="poster" />
      <video ref={videoRef} src={IntroVideo} controls width="100%" onEnded={handleVideoEnd} />
      <PlayIconWrapper onClick={handlePlayPauseClick}>
        {isPlaying ? <PauseIcon className="pause-icon" /> : <PlayIcon />}
      </PlayIconWrapper>
    </Wrapper>
  );
};

export default Video;
