import { useEffect, useState } from "react";
import styles from "./AnalogClock.module.css";

const AnalogClock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const time = new Date();
      setHours(time.getHours());
      setMinutes(time.getMinutes());
      setSeconds(time.getSeconds());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <div className={styles.container}>
      <div className={`${styles.mark12} ${styles.mark}`}></div>
      <div className={`${styles.mark6} ${styles.mark}`}></div>
      <div className={`${styles.mark3} ${styles.mark}`}></div>
      <div className={`${styles.mark9} ${styles.mark}`}></div>
      <div
        className={styles.minute}
        style={{
          transform: `translateX(calc(-50% + 2px)) translateY(-50%) rotate(${
            minutes * 6
          }deg)`
        }}
      ></div>
      <div
        className={styles.hour}
        style={{
          transform: `translateX(calc(-50% + 2px)) translateY(-50%) rotate(${
            hours * 30
          }deg)`
        }}
      ></div>
      <div
        className={styles.second}
        style={{
          transform: `translateX(calc(-50% + 1px)) translateY(-50%) rotate(${
            seconds * 6
          }deg)`
        }}
      ></div>
    </div>
  );
};

export default AnalogClock;
