import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi.jsx';
import { Provider } from 'react-redux'
import Store from './Store.js';
import firebaseConfig from './firebase.Config.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApi>
    <Provider store={Store}>
      <App />
    </Provider>
  </ContextApi>
)