import React from 'react'
import ReactDOM from 'react-dom/client'
import '../css/style.css';
import { Navbar } from './components/navbar/Navbar';
import { Header } from './components/header/Header';
import { About } from './components/about/About';
import { Experience } from './components/experience/Experience';
import { Skills } from './components/skills/Skills';
import { Footer } from './components/footer/Footer';
import { ProjectCarousel} from './components/projects/ProjectCarousel';
// import { CarouselNuevo } from './components/projects/CarouselNuevo';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <About/>
    <Experience/>
    <Skills/>
    <ProjectCarousel/>
    <Footer/>
  </React.StrictMode>,
)
