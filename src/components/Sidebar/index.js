
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSub} alt='sub-logo' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faUser} color='#4d4D4e' />
                </NavLink>
                <NavLink className='about-link' exact='true' activeclassname='active' to='/about'>
                    <FontAwesomeIcon icon={faHome} color='#4d4D4e' />
                </NavLink>
                <NavLink className='contact-link' exact='true' activeclassname='active' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4D4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/cyrillebomba/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/manofsteel1988"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar