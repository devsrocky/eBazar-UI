import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './assets/styles/style.css';
import './assets/styles/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/responsive.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
