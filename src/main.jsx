import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Basic from './Basic.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Basic />
  </StrictMode>,
)
