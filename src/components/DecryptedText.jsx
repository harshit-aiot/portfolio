import React, { useState, useEffect, useRef } from 'react';

export default function DecryptedText({
  text,
  speed = 35,
  maxIterations = 10,
  sequential = true,
  animateOn = 'hover', // 'hover' or 'view'
  className = '',
  style = {}
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    if (animateOn === 'view') {
      triggerAnimation();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text]);

  const triggerAnimation = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    let currentIteration = 0;
    const textLength = text.length;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      let nextText = '';
      let done = true;

      for (let i = 0; i < textLength; i++) {
        if (text[i] === ' ') {
          nextText += ' ';
          continue;
        }

        if (sequential) {
          const revealThreshold = Math.floor(currentIteration / maxIterations);
          if (i < revealThreshold) {
            nextText += text[i];
          } else if (i === revealThreshold) {
            if (currentIteration % maxIterations === 0 && currentIteration > 0) {
              nextText += text[i];
            } else {
              nextText += chars[Math.floor(Math.random() * chars.length)];
              done = false;
            }
          } else {
            nextText += chars[Math.floor(Math.random() * chars.length)];
            done = false;
          }
        } else {
          if (currentIteration >= maxIterations) {
            nextText += text[i];
          } else {
            nextText += chars[Math.floor(Math.random() * chars.length)];
            done = false;
          }
        }
      }

      setDisplayText(nextText);
      currentIteration++;

      if (done || currentIteration > (textLength + 1) * maxIterations) {
        setDisplayText(text);
        setIsAnimating(false);
        clearInterval(intervalRef.current);
      }
    }, speed);
  };

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      triggerAnimation();
    }
  };

  return (
    <span 
      className={className} 
      style={{ ...style, display: 'inline-block', cursor: 'default' }}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
}
