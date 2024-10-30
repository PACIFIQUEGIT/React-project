import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App'; // Ensure this imports your App component
import './index.css'; // Import your styles

const rootElement = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create the root

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
