import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import logo from '../img/logo192.png'
import { TransactionContext } from '../context/TransactionContext';

const NavbarItem = ({title, classProps}) => {

  return(<li className="navbar_item">
    {title}
  </li>)
}


const Navbar = () => {
  const { connectWallet } = useContext(TransactionContext)

    return (
        <nav className='navbar'>
            <h1>CRYPTO TRANSACTIONS</h1>

            <ul className='navbar_list'>
            {/* <FontAwesomeIcon size='x1' icon={faEnvelope} /> */}
                <NavbarItem title={"Market"}/>
                <NavbarItem title={"Exchange"}/>
                <NavbarItem title={"Tutorials"}/>
                <NavbarItem title={"Wallets"}/>
                <button 
                  onClick={() => connectWallet()}
                  className='login_btn'
                >
                  Login
                </button>
            </ul>
          
        </nav>
    );
}

export default Navbar;
