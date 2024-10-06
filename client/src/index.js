import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the Redux Provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);