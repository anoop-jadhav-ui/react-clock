const ledConfig = {
  0: [0, 1, 2, 3, 4, 5],
  1: [1, 2],
  2: [0, 1, 3, 4, 6],
  3: [0, 1, 2, 3, 6],
  4: [1, 2, 5, 6],
  5: [0, 2, 3, 5, 6],
  6: [0, 2, 3, 4, 5, 6],
  7: [0, 1, 2],
  8: [0, 1, 2, 3, 4, 5, 6],
  9: [0, 1, 2, 3, 5, 6]
};

const SevenSegmentModule = ({ number }) => {
  const showLed = (ledNumber) => {
    return ledConfig[number].includes(ledNumber);
  };

  return (
    <svg width="46" height="87" viewBox="0 0 46 87" fill="lightpink">
      {showLed(0) && (
        <path className="led0" d="M7 0L4.5 3.5L12 11.5H33L42 2.5L39.5 0H7Z" />
      )}
      {showLed(1) && (
        <path
          className="led1"
          d="M46 6.5L43 3.5L35 11.5V37L40.5 42.5L46 37V6.5Z"
        />
      )}

      {showLed(2) && (
        <path
          className="led2"
          d="M46 80.5L43 83.5L35 75.5V50L40.5 44.5L46 50V80.5Z"
        />
      )}

      {showLed(3) && (
        <path
          className="led3"
          d="M7 87L4.5 83.5L12 75.5H33L42 84.5L39.5 87H7Z"
        />
      )}

      {showLed(4) && (
        <path
          className="led4"
          d="M0 50V79L3.5 82.5L11 74.5V50L5.5 44.5L0 50Z"
        />
      )}

      {showLed(5) && (
        <path className="led5" d="M0 37V8L3.5 4.5L11 12.5V37L5.5 42.5L0 37Z" />
      )}

      {showLed(6) && (
        <path
          className="led6"
          d="M33.8636 38H12.1364L6.5 43.5L12.1364 49L34 48.8636L39.5 43.5L33.8636 38Z"
        />
      )}
    </svg>
  );
};

export default SevenSegmentModule;
