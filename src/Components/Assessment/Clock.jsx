import { useState, useRef } from 'react';
// import Draggable from 'react-draggable';
// import { ClockContainer, ClockFace, Hand, NumberContainer, TimeDisplay } from '../../Styles/AssessmentStyle/ClockStyle'
import '../../Styles/AssessmentStyle/clock.css'

const Clock = () => {
    const [hourDegrees, setHourDegrees] = useState(300); // Default to 8:00
    const [minuteDegrees, setMinuteDegrees] = useState(60); // Default to 5 mins
    const clockRef = useRef(null); // Reference to the clock face
  
    // Calculate degrees based on mouse position relative to clock center
    const calculateDegrees = (clientX, clientY) => {
      const rect = clockRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const radians = Math.atan2(clientY - centerY, clientX - centerX);
      const degrees = (radians * (180 / Math.PI) + 90) % 360;
      return degrees < 0 ? degrees + 360 : degrees;
    };
  
    const handleHourDrag = (e) => {
      const degrees = calculateDegrees(e.clientX, e.clientY);
      setHourDegrees(degrees);
    };
  
    const handleMinuteDrag = (e) => {
      const degrees = calculateDegrees(e.clientX, e.clientY);
      setMinuteDegrees(degrees);
    };
  
    const hours = Math.floor(hourDegrees / 30) % 12 || 12; // 30 degrees per hour
    const minutes = Math.floor(minuteDegrees / 6); // 6 degrees per minute
    const isPM = hourDegrees >= 240; // PM if past 8 o'clock
  
    const displayTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${isPM ? 'PM' : 'AM'}`;
  
    return (
      <div className="clock-container">
        <div className="clock-face" ref={clockRef}>
          {/* Hour hand */}
          <div
            className="hand hour"
            style={{ transform: `rotate(${hourDegrees}deg)` }}
            onMouseDown={() => {
              window.addEventListener('mousemove', handleHourDrag);
              window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', handleHourDrag);
              });
            }}
          ></div>
  
          {/* Minute hand */}
          <div
            className="hand minute"
            style={{ transform: `rotate(${minuteDegrees}deg)` }}
            onMouseDown={() => {
              window.addEventListener('mousemove', handleMinuteDrag);
              window.addEventListener('mouseup', () => {
                window.removeEventListener('mousemove', handleMinuteDrag);
              });
            }}
          ></div>
  
          {/* Clock numbers */}
          {[...Array(12)].map((_, i) => {
            const angle = i * 30; // 30 degrees for each number
            const x = 140 + 110 * Math.sin((angle * Math.PI) / 180); // Calculate X position
            const y = 140 - 110 * Math.cos((angle * Math.PI) / 180); // Calculate Y position
  
            return (
              <div
                key={i}
                className="number"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: `translate(-50%, -50%)`,
                }}
              >
                {i === 0 ? 12 : i}
              </div>
            );
          })}
        </div>
        <div className="time-display">{displayTime}</div>
      </div>
    );
  };
  
  export default Clock;