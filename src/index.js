import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App/App';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);