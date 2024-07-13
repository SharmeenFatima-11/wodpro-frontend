import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ExpandedProvider } from './context/Expanded.jsx'
import "../firebase.js"
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ExpandedProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ExpandedProvider>
    </BrowserRouter>
  </React.StrictMode>,

)
