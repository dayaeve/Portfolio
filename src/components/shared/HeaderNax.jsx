import { Link } from "react-router-dom"
import '../../styles/HeaderNav.css'
import { useState } from "react"


const HeaderNav = () => {
    const [showMenu, setShowMenu] = useState(false)
    
    
    return (
        <div className="headernav">
            <div className="links">
                <Link className="header__link" to='/'>Home</Link>
                <Link className="header__link"to='/AboutMe'>About</Link>
                <Link className="header__link"to='/Skills'>Skills</Link>
                <Link className="header__link"to='/Education'>Education</Link>
                <Link className="header__link"to='/Projects'>Projects</Link> 
                <Link className="header__link"to='/Contact'>Contact</Link> 
            </div >
            
            <div className="divMenu">
            <button className="mobMenu" onClick={() => setShowMenu(!showMenu)}><i className='bx bx-menu'></i></button>
            </div>
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link className="listItem" to='/'onClick={()=>setShowMenu(false)}>Home</Link>
                <Link className="listItem"to='/AboutMe'onClick={()=>setShowMenu(false)}>About</Link>
                <Link className="listItem"to='/Skills'onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link className="listItem"to='/Education'onClick={()=>setShowMenu(false)}>Education</Link>
                <Link className="listItem"to='/Projects'onClick={()=>setShowMenu(false)}>Projects</Link> 
                <Link className="listItem"to='/Contact'onClick={()=>setShowMenu(false)}>Contact</Link> 
                
                
            </div >

        </div>
    )
}

export default HeaderNav