import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../img/logo192.png'

const NavbarItem = ({title, classProps}) => {

  return(<li className="navbar_item">
    {title}
  </li>)
}



const Navbar = () => {
    
    return (
        <nav className='navbar'>
          <div className="banner">
            <img  src={logo} alt="logo" className='w-32 cursor-pointer'/>
            <button className='wallet_btn'>
                Connect Wallet
            </button>
          </div>
          <ul className='navbar_list'>
          {/* <FontAwesomeIcon size='x1' icon={faEnvelope} /> */}
              <NavbarItem title={"Market"}/>
              <NavbarItem title={"Exchange"}/>
              <NavbarItem title={"Tutorials"}/>
              <NavbarItem title={"Wallets"}/>
          </ul>
        </nav>
    );
}

export default Navbar;
