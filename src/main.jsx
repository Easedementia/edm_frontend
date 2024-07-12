import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'typeface-poppins'
import {Provider} from 'react-redux'
import {PersistStore, store} from './Redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={PersistStore} >
        <App />
      </PersistGate>
    </Provider>
    
  </React.StrictMode>,
)
