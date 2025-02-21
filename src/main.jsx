import React from 'react'
import ReactDOM from 'react-dom/client'
import 'typeface-poppins'
import {Provider} from 'react-redux'
import {PersistStore, store} from './Redux/Store.jsx'
import { PersistGate } from 'redux-persist/integration/react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                        
import 'primeflex/primeflex.css';       
import { ChakraProvider } from '@chakra-ui/react' 
import GlobalStyles from './Styles/GlobalStyles.jsx'
import './index.css'
import App from './App.jsx'                  

        



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={PersistStore} >
          <GlobalStyles/>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
