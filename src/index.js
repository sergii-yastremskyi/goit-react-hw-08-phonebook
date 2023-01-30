import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          {/* <BrowserRouter> */}
          {/* <PersistGate loading={null} persistor={ persistor} > */}
          <App />
          {/* </PersistGate> */}
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
