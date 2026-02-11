import React from 'react';
import './Butterfly.css';

const Butterfly = ({ index }) => {
  const styles = {
    animationDelay: `${index * 0.5}s`,
    left: `${(index * 15) % 100}%`,
    top: `${(index * 20) % 100}%`,
    fontSize: `${30 + index * 5}px`,
    transform: `rotate(${index * 45}deg)`
  };

  return (
    <div className="butterfly" style={styles}>
      🦋
    </div>
  );
};

export default Butterfly;