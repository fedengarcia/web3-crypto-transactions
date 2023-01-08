import React, {useContext, useState, useEffect} from 'react';

import {TransactionContext} from '../context/TransactionContext';
import useFetch from '../hooks/useFetch';

const TransactionCard = ({shortenAddres, addressTo, addressFrom, timestamp, message, keyword, amount}) => {
    const gifUrl = useFetch({keyword})




    return (
        <div className='transaction-card'>
            <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target='_blank' rel='noopener noreferrer'>
                <p>From: {shortenAddres(addressFrom)}</p>
            </a>
            <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target='_blank' rel='noopener noreferrer'>
                <p>To: {shortenAddres(addressTo)}</p>
            </a>
            <p className='amount'>Amount: {amount} ETH</p>
            {
                message && 
                <>
                    <p> Message: {message}</p>
                </>
            }
            <div className='timestamp'>
                {timestamp}
            </div>
            <img
                src={gifUrl}
                alt="gif"
                className='gif'
            />
        </div>
    )
}

const Transactions = () => {
    const {currentAccount, shortenAddres} = useContext(TransactionContext);
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        setTransactions([
            {

            }
        ])
    }, []);




    console.log(currentAccount)
    return (
        <div className='transactions-section'>
               <h1>Latest transactions</h1>
                {typeof currentAccount === 'string' 
                ?   
                    <>
                        <p>Address: {shortenAddres()}</p>
                        <div className='transactions-container'>

                
                        </div>
                    </>
                : 
                    <p>Connect your wallet to see the latest trasanctions</p>
                }
            
        </div>
    );
}

export default Transactions;
