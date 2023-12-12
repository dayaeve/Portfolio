import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import HeaderNav from './components/shared/HeaderNax';
import Education from './pages/Education';
import { useEffect, useState } from 'react';
import Contact from './pages/Contact';


function App() {

 const onButtonClick = () => {
  
  fetch("SamplePdf.pdf").then((response) => {
      response.blob().then((blob) => {
       
          
          const fileURL =
              window.URL.createObjectURL(blob);
               
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "SamplePdf.pdf";
          alink.click();
      });
  });
};

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light')
    
  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  
  return (

    <div className={`App ${theme}`}>
      <HeaderNav/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/education' element={<Education/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <div>
        <button className='switch' onClick={toogleTheme}>
                <span><i className='bx bxs-sun'></i></span>
                <span><i className='bx bxs-moon'></i></span>
        </button>
        <button onClick={onButtonClick} className='app__cv'><span className='cv__span'>CV</span></button>
        </div>
    </div>

  )
}

export default App
