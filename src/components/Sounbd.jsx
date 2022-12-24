import sound from "../assets/sound.mp3";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import { useState } from "react";

const Sound = () => {
  const [sounds] = useState(new Audio(sound));
  const [play, setPlay] = useState(false);

  const handleClick = () => {
    if (play) {
      sounds.pause();
      setPlay(false);
    } else {
      sounds.play();
      setPlay(true);
    }
  };

  return (
    <>
      {!play ? (
        <FiVolume2 className="sound" onClick={() => handleClick()} />
      ) : (
        <FiVolumeX className="sound" onClick={() => handleClick()} />
      )}
    </>
  );
};

export default Sound;
