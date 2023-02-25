import { useState, useEffect } from "react";
import { useAudio } from 'react-use';

const CountDown = () => {
  const [hours, setHours] = useState(0);
  const [minutues, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [countdownFinished, setCountdownFinished] = useState(false);

  const [audio, state, controls, ref] = useAudio({
    src: 'Midnight_Tokyo.wav'
  });

  useEffect(() => {
    const target = new Date("25 February 2023 10:00 GMT+8");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference <= 0) {
        setCountdownFinished(true);
        clearInterval(interval);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      } else {
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);
      }
    }, 1000);


    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdownFinished) {
      alert("Please refresh the minting page");
    }
  }, [countdownFinished]);

  return (
    <div className='bgContainer'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='bg'
      >
        <source
          // eslint-disable-next-line max-len
          src="Temple.mp4"
          type="video/mp4" />
      </video>
      <div>
        {audio}
        {!state.playing
          ? <img onClick={controls.play}
            className="play blink"
            src="play.png"
            onMouseOver={e => (e.currentTarget.src = "playRed.png")}
            onMouseOut={e => (e.currentTarget.src = "play.png")} />
          : <img onClick={controls.pause}
            className="pause"
            src="pause.png"
            onMouseOver={e => (e.currentTarget.src = "pauseRed.png")}
            onMouseOut={e => (e.currentTarget.src = "pause.png")} />}
      </div>
      <a href='https://theninjakingdom.com' target="_blank" rel="noopener" >
        <img className='logo' src='logo.png'></img>
      </a>
      <div className="wrapper">
        <div className='countdown-timer'>
          <div className="timer-items">
            <div className="hours">
              <h3>{hours}</h3>
              <span>HOURS</span>
            </div>
          </div>
          <div className="timer-items">
            <div className="minutes">
              <h3>{minutues}</h3>
              <span>MINUTES</span>
            </div>
          </div>
          <div className="timer-items">
            <div className="seconds">
              <h3>{seconds}</h3>
              <span>SECONDS</span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="live-soon">WHITELIST MINT IS LIVE SOON</h1>
    </div>
  )
}

export default CountDown;