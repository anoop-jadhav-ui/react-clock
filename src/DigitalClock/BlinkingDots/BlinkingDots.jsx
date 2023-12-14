import { useEffect, useMemo, useState } from "react";
import styles from "./BlinkingDots.module.css";

const BlinkingDots = ({ seconds }) => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setVisibility("visible");
    const timer = setTimeout(() => {
      setVisibility("hidden");
    }, 500);
    return () => {
      -clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <div className={styles.container} style={{ visibility }}>
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};

export default BlinkingDots;
