import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are prerendered (see prerender.js); dev only has the noscript fallback.
if (root.firstElementChild?.tagName === 'NOSCRIPT') {
  root.replaceChildren()
  createRoot(root).render(app)
} else {
  hydrateRoot(root, app)
}
