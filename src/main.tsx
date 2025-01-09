import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Sample  from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Sample />
  </StrictMode>,
)
