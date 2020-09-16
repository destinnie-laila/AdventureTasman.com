import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    Tasman Adventures
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
                        <Link to='/login' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/adventures' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Adventures
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/map' className='nav-links' onClick=
                        {closeMobileMenu}>
                            Maps
                        </Link>
                    </li>
                 
                </ul>
                
            </nav>
        </>
    )
}

export default Navbar;
