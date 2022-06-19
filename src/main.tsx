import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TestComponent from "./lib/TestComponent";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>
)
