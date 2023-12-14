import { useEffect, useState } from "react";
import BlinkingDots from "./BlinkingDots/BlinkingDots";
import styles from "./DigitalClock.module.css";
import SevenSegmentModule from "./SevenSegmentModule/SevenSegmentModule";

const DigitalClock = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const convertToTwoDigits = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const time = new Date();
      setHours(convertToTwoDigits(time.getHours()));
      setMinutes(convertToTwoDigits(time.getMinutes()));
      setSeconds(convertToTwoDigits(time.getSeconds()));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <div className={styles.container}>
      <SevenSegmentModule number={hours[0]} />
      <SevenSegmentModule number={hours[1]} />
      <BlinkingDots seconds={seconds} />
      <SevenSegmentModule number={minutes[0]} />
      <SevenSegmentModule number={minutes[1]} />
      <BlinkingDots seconds={seconds} />
      <SevenSegmentModule number={seconds[0]} />
      <SevenSegmentModule number={seconds[1]} />
    </div>
  );
};

export default DigitalClock;
