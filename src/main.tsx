import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Hide and remove preloader once the app is mounted
const hidePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  preloader.classList.add('preloader-hidden');
  // Remove from DOM after CSS transition
  window.setTimeout(() => preloader.remove(), 350);
};

// Ensure we allow first paint, then fade out
requestAnimationFrame(() => hidePreloader());
