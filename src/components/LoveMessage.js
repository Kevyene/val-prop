import React, { useEffect, useState } from 'react';
import './LoveMessage.css';

const LoveMessage = () => {
  const [showElements, setShowElements] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullMessage = `My pretty baby 💖,

From the moment you came into my life,
everything has been brighter, more beautiful,
and filled with so much joy.

You are the most amazing person I know -
your smile lights up my world,
your laughter is my favorite melody,
and your love is the greatest gift I've ever received.

This Valentine's Day, I want to promise you
that I'll cherish every moment with you,
support you in all your dreams,
and love you more with each passing day.

Will you be my Valentine today,
tomorrow, and forever?

With all my heart,
Your loving partner 💝`;

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 500);
    
    // Typewriter effect
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setTypedText(fullMessage.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(typeInterval);
    };
  }, [fullMessage]);
  const [hugCount, setHugCount] = useState(0);
const [kissCount, setKissCount] = useState(0);
const [floatingEmojis, setFloatingEmojis] = useState([]);

const sendHug = () => {
  setHugCount(prev => prev + 1);
  
  // Create floating hug emojis
  const newHugEmojis = Array.from({ length: 10 }).map((_, i) => ({
    id: Date.now() + i,
    type: 'hug',
    emoji: '🤗',
    left: Math.random() * 80 + 10,
    delay: Math.random() * 2
  }));
  
  setFloatingEmojis(prev => [...prev, ...newHugEmojis]);
  
  // Remove emojis after animation
  setTimeout(() => {
    setFloatingEmojis(prev => prev.slice(10));
  }, 3000);
};

const sendKiss = () => {
  setKissCount(prev => prev + 1);
  
  // Create floating kiss emojis
  const newKissEmojis = Array.from({ length: 10 }).map((_, i) => ({
    id: Date.now() + i,
    type: 'kiss',
    emoji: '😘💋',
    left: Math.random() * 80 + 10,
    delay: Math.random() * 2
  }));
  
  setFloatingEmojis(prev => [...prev, ...newKissEmojis]);
  
  // Remove emojis after animation
  setTimeout(() => {
    setFloatingEmojis(prev => prev.slice(10));
  }, 3000);
};

const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

useEffect(() => {
  const calculateTimeLeft = () => {
    // Set target date to Feb 14th, 1:00 PM of current year
    const currentYear = new Date().getFullYear();
    const targetDate = new Date(currentYear, 1, 14, 13, 0, 0); // February is month 1 (0-indexed)
    
    // If Feb 14 has passed this year, target next year
    if (new Date() > targetDate) {
      targetDate.setFullYear(currentYear + 1);
    }
    
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const timer = setInterval(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearInterval(timer);
}, []);

  return (
    <div className="love-message-page">
      <div className="message-container">
        {/* Animated Header */}
        <div className={`message-header ${showElements ? 'visible' : ''}`}>
          <div className="big-heart">💖</div>
          <h1 className="message-title">You Said YES! 💝</h1>
          <div className="big-heart">💖</div>
        </div>

        {/* Message Box */}
        <div className="message-box">
          <div className="envelope-top">✉️</div>
          
          <div className="message-content">
            <div className="message-text">
              <pre>{typedText}</pre>
              <div className="cursor"></div>
            </div>
            
            <div className="message-footer">
              <div className="signature">
                <p className="signature-line">________________</p>
                <p className="signature-name">Your Forever Valentine</p>
              </div>
            </div>
          </div>
          
          <div className="envelope-bottom">💌</div>
        </div>

        {/* Celebration Animation */}
        <div className="celebration">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>

        {/* Interactive Elements */}
        <div className="interactive-section">
  <div className="action-stats">
    <div className="stat">
      <span className="stat-count">{hugCount}</span>
      <span className="stat-label">Hugs Sent</span>
    </div>
    <div className="stat">
      <span className="stat-count">{kissCount}</span>
      <span className="stat-label">Kisses Sent</span>
    </div>
  </div>
  
  <div className="action-buttons">
    <button className="hug-button" onClick={sendHug}>
      <span className="button-icon">🤗</span>
      Send Virtual Hug
    </button>
    <button className="kiss-button" onClick={sendKiss}>
      <span className="button-icon">😘</span>
      Send Virtual Kiss
    </button>
  </div>
  
  {/* Floating Emojis */}
  <div className="floating-emojis-container">
    {floatingEmojis.map(emoji => (
      <div
        key={emoji.id}
        className={`floating-emoji ${emoji.type}`}
        style={{
          left: `${emoji.left}%`,
          animationDelay: `${emoji.delay}s`
        }}
      >
        {emoji.emoji}
      </div>
    ))}
  </div>
</div>

        {/* Memory Section */}
<div className="memory-section">
  <h3>Our Beautiful Memories 💖</h3>
  <div className="memory-photos">
    <div className="memory-frame">
      <img 
        src="/images/photo 1.jpeg" 
        alt="Our special moment" 
        className="memory-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ffccd5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23590d22'%3EPhoto 1%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="memory-caption"> Cuffed ❤️</div>
    </div>
    <div className="memory-frame">
      <img 
        src="/images/photo3.jpeg" 
        alt="Another special moment" 
        className="memory-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ffccd5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23590d22'%3EPhoto 2%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="memory-caption">That Amazing Day ✨</div>
    </div>
    <div className="memory-frame">
      <img 
        src="/images/photo2.jpeg" 
        alt="Cute couple pic" 
        className="memory-img"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23ffccd5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23590d22'%3EPhoto 3%3C/text%3E%3C/svg%3E";
        }}
      />
      <div className="memory-caption">Always Together 🌟</div>
    </div>
  </div>
</div>

        {/* Countdown */}
        <div className="countdown">
  <h3>Countdown to Our Second Valentine's Day! 💝</h3>
  <p>Counting every second until I can celebrate with you...</p>
  
  <div className="countdown-container">
    <div className="countdown-unit">
      <div className="countdown-value">{timeLeft.days}</div>
      <div className="countdown-label">Days</div>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-unit">
      <div className="countdown-value">{timeLeft.hours.toString().padStart(2, '0')}</div>
      <div className="countdown-label">Hours</div>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-unit">
      <div className="countdown-value">{timeLeft.minutes.toString().padStart(2, '0')}</div>
      <div className="countdown-label">Minutes</div>
    </div>
    <div className="countdown-separator">:</div>
    <div className="countdown-unit">
      <div className="countdown-value">{timeLeft.seconds.toString().padStart(2, '0')}</div>
      <div className="countdown-label">Seconds</div>
    </div>
  </div>
  
  <div className="countdown-message">
    <p>February 14th • 1:00 PM • Our Special Time ❤️</p>
  </div>
</div>
      </div>
      
    </div>
  );
};

export default LoveMessage;


