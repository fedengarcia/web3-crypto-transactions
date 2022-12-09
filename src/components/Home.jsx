import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TransactionForm from './TransactionForm';

const Home = () => {




    return (
        <div className='home'>
            <div className='home-aside home-left-container'>
                <h1>Send Crypto across the world</h1>
                <p>Explore the crypto world. Buy and sell cryptocurrencies easily on Kripto</p>
                <button className='wallet_btn'>Connect Wallet</button>
            </div>
            <div className='home-aside home-right-container'>
                <TransactionForm/>
            </div>
        </div>
    );
}

export default Home;
