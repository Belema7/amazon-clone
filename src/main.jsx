import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {DataProvider} from './components/DataProvider/DataProvider.jsx'
import { reducer, initialState } from './components/Utility/reducer.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <DataProvider reducer={reducer} initialState={initialState}>
    <App />
    </DataProvider>
  </BrowserRouter>
  </StrictMode>
)
