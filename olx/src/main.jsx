import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './store/FirebaseContext.jsx'
import { firebaseApp } from './firebase/Config.js'
import ContextAuth from './store/ContextAuth.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FirebaseContext.Provider value={{firebaseApp}}>
    <ContextAuth >
      <App />
    </ContextAuth>
  </FirebaseContext.Provider>
  // </React.StrictMode>,
)
