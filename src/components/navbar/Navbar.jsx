import { Link } from 'react-router-dom'
import './Navbar.css'
import React, { useState } from 'react'
const Navbar = () => {
const[click,setclick]=useState(false)
const handleclick=()=>{
    setclick(!click)
}
const[color,setcolor]=useState(false)
const changecolor=()=>{
    if(window.scrollY>=100)
    {
     setcolor(true)

    }
    else{
        setcolor(false)
    }
}
window.addEventListener("scroll",changecolor)
  return (
  <>
  <div className={color?"header header-bg":"header"}>
    <Link to="/" style={{textDecoration:'none'}}>
        <h1 style={{color:'black'}}>Grafikally</h1>
    </Link>
    <ul className={click?"nev-menu active" :"nev-menu"}>
        <li>
            <Link to="/" style={{textDecoration:'none'}}>Home</Link>
        </li>
        <li>
            <Link to="/contact" style={{ textDecoration:'none', marginRight:'11rem'}}>Contact</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={handleclick}>
        {click?(<i className="fa-solid fa-xmark"></i> ):( <i className="fa-solid fa-bars"></i>)}
    </div>
  </div>
  </>
  )
}

export default Navbar