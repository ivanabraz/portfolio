import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CONTEXT
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='w-screen h-screen bg-white dark:bg-black'>
          <App />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
