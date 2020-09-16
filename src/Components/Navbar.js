import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Violin For All
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Login' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Tutorials' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Tutorials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/SheetMusic' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Sheet Music
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Forum' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Forum
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Message' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Message
                        </Link>
                    </li>
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar;
