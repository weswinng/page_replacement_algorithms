import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PageReplacementProvider } from './context/PageReplacementContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageReplacementProvider>
      <App />
    </PageReplacementProvider>
  </StrictMode>
)
