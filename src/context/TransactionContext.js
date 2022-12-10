import React, {createContext, useEffect, useState} from 'react';
import {getDefaultProvider, Contract} from 'ethers';
import {contractAddress, contracttABI} from '../CONSTANTS'


export const TransactionContext = createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    
    const provider = new getDefaultProvider.web3Provider(ethereum)
    const signer = provider.getSigner();
    const transactionContract = new Contract(contractAddress, contracttABI, signer)

    console.log({
        provider, signer, transactionContract
    })
}


export const TransactionProvider = ({children}) => {


    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    const checkIfWalletIsConnected = async () => {
        if(!ethereum) return alert("Please install metamask")

        const accounts = await ethereum.request({method:'eth_accounts'})

        console.log(accounts)

    }

    return (
        <TransactionContext.Provider value={checkIfWalletIsConnected}>
            {children}
        </TransactionContext.Provider>
    )

}