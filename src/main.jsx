import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContext from './context/ThemeContext.jsx'
import AuthCountext from './context/AuthCountext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthCountext>
      <ThemeContext>
        <App />
        <Toaster/>
      </ThemeContext>
    </AuthCountext>
  </React.StrictMode>,
)
