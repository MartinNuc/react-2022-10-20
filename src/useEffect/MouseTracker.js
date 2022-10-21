import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import styles from './MouseTracker.module.css';

export function MouseTracker() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [lastClickCoordinates, setLastClickCoordinates] = useState({ x: 0, y: 0 });

  const { isDarkModeEnabled } = useContext(ThemeContext);

  useEffect(() => {
    function mouseMoveHandler(event) {
      setCoordinates({
        x: event.clientX,
        y: event.clientY
      });
    }

    window.addEventListener('mousemove', mouseMoveHandler);
  }, []);

  useEffect(() => {
    function mouseMoveHandler(event) {
      setLastClickCoordinates({
        x: event.clientX,
        y: event.clientY
      });
    }

    window.addEventListener('click', mouseMoveHandler);
  }, []);

  const textClass = coordinates.x < lastClickCoordinates.x ? styles.green : styles.red;

  return <div className={isDarkModeEnabled ? styles.dark : null}>
    <div className={textClass}>
      <div>Current position X: {coordinates.x} Y: {coordinates.y}</div>
      <div>Last click X: {lastClickCoordinates.x} Y: {lastClickCoordinates.y}</div>
    </div>
  </div>
}