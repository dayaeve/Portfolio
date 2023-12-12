import React from 'react'
import '../styles/Skills.css'

const Skills = () => {
  return (
    <div className='skills__div'>
      <div className='skills__section'>
        <h2 className='skills__h2'><span className='skills__span'>My</span> Knowledge</h2>
        <ul className='skills__ul1'>
          <li className='skills__li'>Javascript</li>
          <li className='skills__li'>React</li>
          <li className='skills__li'>Node JS</li>
          <li className='skills__li'>HTML</li>
          <li className='skills__li'>TYPESCRIPT</li>
          <li className='skills__li'>CSS</li>
        </ul>
      </div>
      <div className='skills__section'>
        <h2 className='skills__h2'><span className='skills__span'>My</span> Soft Skills</h2>
        <ul className='skills__ul1'>
        <li className='skills__li'>Excellent Communication</li>
        <li className='skills__li'>Teamwork</li>
        <li className='skills__li'>Problem-solving</li>
        <li className='skills__li'>Conflict management</li>
        <li className='skills__li'>Adaptability</li>
        </ul>
      </div>
    </div>
    
  )
}

export default Skills