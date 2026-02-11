import React from 'react';
import './QuestionPage.css';

const QuestionPage = ({ onYesClick, onNoHover }) => {
  return (
    <div className="question-page">
      <div className="question-container">
        {/* Romantic Header */}
        <div className="romantic-header">
          <div className="heart-pulse">❤️</div>
          <h1 className="title">My Dearest Love</h1>
          <div className="heart-pulse">❤️</div>
        </div>

        {/* Main Question */}
        <div className="question-box">
          <div className="sparkle-sparkle">✨</div>
          <h2 className="question-text">
            Will you be my<br />
            <span className="highlight">Valentine?</span>
          </h2>
          <div className="sparkle-sparkle">✨</div>
        </div>

        {/* Cute Description */}
        <p className="description">
          Every moment with you is special, and I can't imagine celebrating 
          Valentine's Day with anyone else. Please make me the happiest person!
        </p>

        {/* Buttons Container */}
        <div className="buttons-container">
          <button 
            className="yes-btn"
            onClick={onYesClick}
          >
            <span className="button-text">
              YES! 💝
            </span>
            <div className="button-sparkles">
              <span>✨</span>
              <span>✨</span>
              <span>✨</span>
            </div>
          </button>

          <button 
            className="no-btn"
            onMouseEnter={onNoHover}
            onClick={onNoHover}
          >
            <span className="button-text">
              No 💔
            </span>
            <div className="button-warning">
              (This button is broken!)
            </div>
          </button>
        </div>

        {/* Cute Footer */}
        <div className="question-footer">
          <p className="footer-text">
            P.S. I'm hoping you choose YES! 
            <span className="wink"> 😉</span>
          </p>
          <div className="mini-hearts">
            <span>💖</span>
            <span>💕</span>
            <span>💓</span>
            <span>💗</span>
            <span>💞</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;