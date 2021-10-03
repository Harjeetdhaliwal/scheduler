import { useState } from "react";

export default function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {

    if (replace) {
      setMode(newMode)
    } else {
      setMode(newMode);
      setHistory(prev => [...prev, mode])
    }
   
  }

  const back = () => {
    if (history.length > 1) {
      setMode(history.pop())
      console.log(history, mode)
    }
  }

  return { mode, transition, back };
}