import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import '../css/style.css';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <About/>
    <Experience/>
    <Skills/> 
  </React.StrictMode>,
)
