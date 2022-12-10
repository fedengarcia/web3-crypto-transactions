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
    const [connectedAccount, setConnectedAccount] =  useState({});

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask")

            const accounts = await ethereum.request({method:'eth_accounts'})

            if(accounts.length) setConnectedAccount(accounts[0]);
            
            // / getAllTransactions()
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object");
        }
        

    }


    const connectWallet = async() => {
        try {
            if(!ethereum) return alert("Please install metamask")
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setConnectedAccount(accounts[0]);
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object");
        }
    }

    return (
        <TransactionContext.Provider value={{checkIfWalletIsConnected, connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )

}