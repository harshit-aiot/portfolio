import React from 'react';

export default function ShinyText({ 
  text, 
  disabled = false, 
  speed = 5, 
  className = '',
  style = {}
}) {
  return (
    <div
      className={`shiny-text-component ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
        display: 'inline-block',
        animationDuration: `${speed}s`,
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        ...style
      }}
    >
      {text}
    </div>
  );
}
