import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { TransactionProvider } from './context/TransactionContext' // Real blockchain
import { TransactionProvider } from './context/TransactionContextDemo' // Demo mode for GitHub Pages

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </StrictMode>,
)
