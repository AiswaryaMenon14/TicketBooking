import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Booking from './pages/Booking'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<Booking/>
  </StrictMode>,
)
