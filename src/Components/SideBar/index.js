import React from 'react'
import './index.scss'
import {Link, NavLink} from "react-router-dom"
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/V_LOGO.jpeg'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
  } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoS} alt='logo'/>
        </Link>
        {/* <div className='sub-logo'>JSR</div> */}
        <nav>
            <NavLink exact="true" activeclassname="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            
        </nav>
        <ul>
            <li><a target='_blank' rel='noreferrer'  href='https://www.linkedin.com/in/vedant-asati-ab278a252'><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon></a></li>
            <li><a target='_blank' rel='noreferrer'  href='https://github.com/vedant-asati'><FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon></a></li>
            <li><a target='_blank' rel='noreferrer'  href='https://twitter.com/vedant_asati_'><FontAwesomeIcon icon={faTwitter} color="#4d4d4e"></FontAwesomeIcon></a></li>
        </ul>
    </div>
  )
}

export default SideBar