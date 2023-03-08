import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import '../css/style.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <About/>
  </React.StrictMode>,
)
