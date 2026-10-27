import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Moves the background glow to follow the pointer, at most once per animation frame.
const useCursorGlow = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = null;
    let x = 0;
    let y = 0;

    const update = (e) => {
      const point = e.touches ? e.touches[0] : e;
      x = point.clientX;
      y = point.clientY;

      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
      });
    };

    document.addEventListener('mousemove', update, { passive: true });
    document.addEventListener('touchmove', update, { passive: true });

    return () => {
      document.removeEventListener('mousemove', update);
      document.removeEventListener('touchmove', update);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);
};

const AppWithCursor = () => {
  useCursorGlow();

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppWithCursor />);
