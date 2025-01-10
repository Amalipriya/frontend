import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
// import App from './App.tsx'
import Hero from '.'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Hero/>
  </StrictMode>,
)
