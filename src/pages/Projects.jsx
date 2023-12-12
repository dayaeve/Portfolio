import React from 'react'
import '../styles/Project.css'

const Projects = () => {
  return (
    <div className='project'>
      <h1 className='project__h1'>My Personal Projects</h1>
      <div className='project__div'>
        <div className='caja'>
            <h2 className='project__h2'>Store Online</h2>
            <a href="https://tienda-de-ropa-blush.vercel.app/index.html"> <img className='project__img' src="../../StoreOnline.png" alt="" /></a>
            <div className='div_caja_odd'>
              <p className='project__p' >This project has the following libraries: Html,Css,Javasript</p>
            </div>
        </div>
        <div className='caja'>
            <h2 className='project__h2'>Weather</h2>
            <a href='https://weather-rho-orpin.vercel.app/'><img className='project__img' src="../../Weather.png" alt="" /></a>
            <div className='div_caja_odd'>
              <p className='project__p'>This project has the following languages: React, Axios, Css</p>
            </div>
        </div>
        <div className='caja'>
            <h2 className='project__h2'>Rick and Morty</h2>
            <a href='https://ricky-and-morty-roan.vercel.app/'> <img className='project__img' src="../../Rick.png" alt="" /></a>
            <div className='div_caja_odd'>
              <p className='project__p' >This project has the following languages: React, Axios, Css</p>
            </div>
        </div>
        <div className='caja'>
           <h2 className='project__h2'>Pokedex</h2>
            <a href='https://pokemon-five-beryl.vercel.app/'><img className='project__img' src="../../Pokedex.png" alt="" /></a>
            <div className='div_caja_odd'>
              <p className='project__p' >This project has the following languages: React, Redux, React Router Dom ,Css</p>
            </div>
        </div>
        <div className='caja'>
            <h2 className='project__h2'>Fortune Cookie </h2>
            <a href=''><img className='project__img' src="../../Galleta.png" alt="" /></a>
            <div className='div_caja_odd'>
              <p className='project__p' >This project has the following languages: React, Axios, Css</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects