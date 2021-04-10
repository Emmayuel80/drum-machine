import React from "react";


export default function DrumPad(props) {
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      }
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === props.keyCode) {
      playSound();
    }
  }
  
  const playSound = () => {
    const sound = document.getElementById(props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    props.updateDisplay(props.clipId.replace(/-/g, ' '));
  }
  return (
      <div
        className={'drum-pad'} 
        id={props.clipId}
        onClick={playSound}
        style={{height: '100px', fontSize: '70px'}}
      >
        <audio
          className="clip"
          id={props.keyTrigger}
          src={props.clip}
        />
        {props.keyTrigger}
      </div>
  );
}
