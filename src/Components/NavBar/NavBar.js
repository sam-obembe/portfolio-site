import React,{useState} from 'react';
import './nav.css';
import {Link} from 'react-router-dom';

const NavBar =()=>{
  const [mobileMenu,toggle] = useState(true)
  
  const menuToggle=()=>{
    let newVal = mobileMenu? false:true
    return  newVal
  }

  return(
    <div>
      
    <nav className = "mobileNav">
      <i className="fas fa-bars" onClick = {()=>toggle(menuToggle)}></i>
      <ul hidden = {mobileMenu}>
        <li className = "mobileLinks"> 
          <Link to = "/"> About </Link>
        </li>

        <li className = "mobileLinks">
          <Link to = "/projects"> Projects </Link>
        </li>

        <li className = "mobileLinks">
          <Link to = "/contact"> Contact </Link>
        </li>
      </ul>
    </nav>

    <nav className = "defaultNav">
      <ul className = "defaultLinks">
        <li>
          <Link to = "/">About</Link>
        </li>

        <li>
          <Link to = "/projects">Projects</Link>
        </li>

        <li>
          <Link to = "/contact">Contact</Link>
        </li>
          
      </ul>
    </nav>
    

    

    </div>
  )
}

export default NavBar
