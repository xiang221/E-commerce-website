import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import store from './store'
import './global.css'


// let persistor = persistStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <App/>
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


