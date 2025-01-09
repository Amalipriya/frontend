import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Basic from './sample'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Basic />
  </StrictMode>,
)
