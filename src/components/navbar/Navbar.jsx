import React,{ useState } from 'react'
import './Navbar.css'
import { logo } from '../../assets'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={logo} alt="logo" />
    </div>
    <div className='app__navbar-links'>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">CATEGORY</a></li>
        <li><a href="#">LATEST GAMES</a></li>
        <li><a href="#">TRENDING GAMES</a></li>
      </ul>
    </div>
    <div className='app__navbar-login'>
      <button type='button'>LOG IN</button>
      <button type='button'>REGISTER</button>
      <div className='app__mobile-icon' onClick={()=> setMenu((prev)=> !prev)}>
        {menu ? <MdOutlineClose /> : <BiMenu />}
      </div>
    </div>
    {menu && (
      <div className='app__navbar-mobile_links'>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">CATEGORY</a></li>
        <li><a href="#">LATEST GAMES</a></li>
        <li><a href="#">TRENDING GAMES</a></li>
      </ul>
    </div>
    )}
    </div>
  )
}

export default Navbar
