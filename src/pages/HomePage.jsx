import React from 'react'
import '../styles/Home.css'

const HomePage = () => {
  return (
    <div className='homecontainer'>
      <div className='home__div'>
        <img className='home__video' src='../../DayanaD.png' alt=''/>
      </div>
      <div className='home__info'>
        <h2 className='home__h2' >Hello</h2>
        <h3 className='home__h3'>I'm Dayana</h3>
        <p className='home__p'>I am a Full Stack Developer</p>
        <div>
            <ul className='home__app'>
            <a href='https://www.linkedin.com/feed/'><li className='home__logo'><i className='bx bxl-linkedin-square'></i></li></a>  
            <a href='https://github.com/'><li className='home__logo'><i className='bx bxl-github' ></i></li></a> 
            </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage