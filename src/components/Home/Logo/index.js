import React from 'react'
import LogoC from '../../../assets/images/logo-c.png'
import './index.scss'

const Logo = () => {
    return (
        <div className="logo-container">
            <img
                className="solid-logo"
                src={LogoC}
                alt="JavaScript,  Developer"
            />
        </div>
    )
}

export default Logo