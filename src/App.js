import React, { useState } from 'react';
import './App.css';
import QuestionPage from './components/QuestionPage';
import LoveMessage from './components/LoveMessage';
import Butterfly from './components/Butterfly';
import RosePetals from './components/RosePetals';

function App() {
  const [isValentine, setIsValentine] = useState(null);
  const [showHearts, setShowHearts] = useState(false);

  const handleYesClick = () => {
    setShowHearts(true);
    setTimeout(() => setIsValentine(true), 1500);
  };

  const handleNoHover = () => {
    const noButton = document.querySelector('.no-btn');
    const container = document.querySelector('.question-container');
    
    if (noButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = noButton.getBoundingClientRect();
      
      const maxX = containerRect.width - buttonRect.width - 20;
      const maxY = containerRect.height - buttonRect.height - 20;
      
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;
      
      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    }
  };

  return (
    <div className="App">
      {/* Background Elements */}
      <div className="background-elements">
        {Array.from({ length: 8 }).map((_, i) => (
          <Butterfly key={i} index={i} />
        ))}
        <RosePetals count={30} />
      </div>

      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="hearts-animation">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i} 
              className="floating-heart"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${20 + Math.random() * 30}px`,
                color: ['#ff4d6d', '#ff8fa3', '#ffb3c1'][Math.floor(Math.random() * 3)]
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="content">
        {isValentine === null ? (
          <QuestionPage 
            onYesClick={handleYesClick}
            onNoHover={handleNoHover}
          />
        ) : (
          <LoveMessage />
        )}
      </div>

      {/* 3D Rose Container */}
      <div className="rose-3d-container">
        <div className="rose-3d">🌹</div>
        <div className="rose-3d">🌹</div>
        <div className="rose-3d">🌹</div>
      </div>
    </div>
  );
}

export default App;