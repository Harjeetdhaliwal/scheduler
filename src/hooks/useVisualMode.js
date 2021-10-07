import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //set new mode and add new mode to history array only if replace is true
  const transition = (newMode, replace = false) => {
    if (replace) {
      setMode(newMode);
    } else {
      setHistory((prev) => [...prev, mode]);
      setMode(newMode);
    }
  };

  //set mode to the last element in the history array and remove the last mode from the history array
  const back = () => {
    if (history.length > 1) {
      setMode(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  return { mode, transition, back };
}
