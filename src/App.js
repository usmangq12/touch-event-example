import React, { useState, useRef } from "react";
import "./styles.css";

const App = () => {
  // State to track the current position of the draggable element
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Ref to store initial touch positions for calculations
  const touchRef = useRef({});

  // Handling for touch start event
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      touchRef.current = {
        startX: touch.clientX - position.x,
        startY: touch.clientY - position.y,
      };
    }
  };

  // Handling for touch move event
  const handleTouchMove = (e) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      // Calculate the new position
      const newX = touch.clientX - touchRef.current.startX;
      const newY = touch.clientY - touchRef.current.startY;
      setPosition({ x: newX, y: newY });
    }
  };

  // Handling for touch end event
  const handleTouchEnd = () => {
    // Clearing the touch reference data
    touchRef.current = {};
  };

  return (
    <div className="App">
      <div
        className="draggable"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        Drag me
      </div>
    </div>
  );
};

export default App;
