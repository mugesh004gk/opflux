import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import './lang.css';

// Loader removal logic (migrated from main.js)
const hideLoader = () => {
  const loader = document.getElementById('loader');
  const body = document.body;
  if (loader) {
    loader.classList.add('fade-out');
    body.classList.remove('loading');
    body.classList.add('loaded');
    setTimeout(() => {
      loader.remove();
    }, 850);
  }
};

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Trigger loader hide after initial mount
window.addEventListener('load', hideLoader, { once: true });
setTimeout(hideLoader, 2200); // Safety fallback
