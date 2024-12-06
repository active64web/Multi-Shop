import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import ContextDataProvider from './context/contextData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextDataProvider>
      <App />
    </ContextDataProvider>
  </StrictMode>,
)