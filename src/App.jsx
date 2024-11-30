import React, { useState } from 'react';
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Carousel2 from "./components/Carousel2.jsx";
import  CodingExperience  from "./components/CodingExperience.jsx";
import Caraousel from "./components/Caraousel.jsx";
import About2 from "./components/About2.jsx";
import Footer from "./components/Footer";
import { DrawerProvider } from './components/DrawerContext';
import Services from './components/Services.jsx';
import Home1 from './components/Home1.jsx';
import Partners from './components/Partners.jsx';
import  CircularProgress  from './components/CircularProgress.jsx';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  return (
    <>
    <div 
    className={`font-roboto ${isDarkMode ? 'dark' : ''} px-6`} 
    style={{
      background:'#DBFFFB'
      //  '#08070D'
    }}
    
    
    
    >
      <DrawerProvider>
        <Navbar toggleDrawer={toggleDrawer} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Home1/>
        {/* <Home isDarkMode={isDarkMode} id="home" /> */}
        <About isDarkMode={isDarkMode}  id="about" />
        <CircularProgress/>
        <Partners/>
       
        <Carousel2 isDarkMode={isDarkMode} id="tech"/>
        <CodingExperience isDarkMode={isDarkMode} id="experience"/>
        <Caraousel isDarkMode={isDarkMode} id="reviews"/>
        <Services isDarkMode={isDarkMode} id="services"/>
        <About2 isDarkMode={isDarkMode} id="about2"/>
        
        <Contact isDarkMode={isDarkMode} id="contact" />
      
       
      </DrawerProvider>
    </div>
    <div>
    <Footer isDarkMode={isDarkMode} />
    </div>
    </>
  );
}

export default App;
