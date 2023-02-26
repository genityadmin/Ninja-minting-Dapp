import Dapp from './Dapp';
import CountDown from './CountDown';
import { useState, useEffect } from 'react';


const switcher = () => {
  const [countdownFinished, setCountdownFinished] = useState(false);

  useEffect(() => {
    const target = new Date("25 February 2023 10:00 GMT+8");
    const now = new Date();

    if (target.getTime() > now.getTime()) {
      setCountdownFinished(true);
    }

  }, [])

  return (
    <>
      <Dapp />

    </>
  )
}

export default switcher;
