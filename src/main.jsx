import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TurnContextProvider from "./Store/Turn-Context";

ReactDOM.createRoot(document.getElementById('root')).render(
  <TurnContextProvider>
    <App />
  </TurnContextProvider>,
)
