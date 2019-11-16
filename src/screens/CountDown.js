import React, { useEffect, useState } from "react";
import moment from "moment";

const CountDown = () => {
  const [secondsLeft, setSecondsLeft] = useState(30 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  const duration = moment.duration(secondsLeft, "s");

  return (
    <div style={styles.container}>
      <p style={styles.ohNo}>Oh no!</p>
      <p style={styles.description}>
        You have to wait a bit before trying again
      </p>
      <p style={styles.countdown}>
        {duration.hours()}:{String(duration.minutes()).padStart(2, 0)}:
        {String(duration.seconds()).padStart(2, 0)}
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffd24a",
    alignItems: "center",
    justifyContent: "center",
    width: 1024,
    height: 768
  },
  ohNo: {
    fontFamily: "Indie Flower",
    fontSize: 50,
    textAlign: "center",
    margin: 0
  },
  description: {
    fontFamily: "Indie Flower",
    fontSize: 30,
    textAlign: "center",
    margin: 0
  },
  countdown: {
    fontFamily: "Indie Flower",
    fontSize: 200,
    textAlign: "center",
    margin: 0
  }
};

export default CountDown;
