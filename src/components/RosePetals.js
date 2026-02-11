import React from 'react';
import './RosePetals.css';

const RosePetals = ({ count = 20 }) => {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: ['🌸', '🌺', '🌷', '💮', '🏵️'][i % 5],
    size: 20 + Math.random() * 30,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    left: Math.random() * 100,
    rotation: Math.random() * 360
  }));

  return (
    <div className="rose-petals-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="rose-petal"
          style={{
            fontSize: `${petal.size}px`,
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `rotate(${petal.rotation}deg)`
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </div>
  );
};

export default RosePetals;
