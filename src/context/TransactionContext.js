import React, {createContext, useEffect, useState} from 'react';
import {ALCHEMY_APIKEY, CONTRACT_ADDRESS, CONTRACT_ABI, PRIVATE_KEY} from '../CONSTANTS'
import { Network, Alchemy } from 'alchemy-sdk';
import { ethers } from 'ethers';

export const TransactionContext = createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    // Provider
    const alchemyProvider = new ethers.providers.AlchemyProvider("goerli", ALCHEMY_APIKEY);
    
    // Signer
    const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

    // Contract
    const transactionContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    return transactionContract;
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] =  useState({});
    const [formData,setFormData] = useState({
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount') ?? 0)

    const handleChangeForm = (e, type) => {
        setFormData(
            (prevState) => ({...prevState, [type]: e.target.value})
        )
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask")

            const accounts = await ethereum.request({method:'eth_accounts'})

            if(accounts.length) setCurrentAccount(accounts[0]);

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
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object");
        }
    }


    const sendTransaction = async() => {
        try {
            if(!ethereum) return alert("Please install metamask")
            const {addressTo, amount, keyword, message} = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //hex -> 21000 Gwei -> 0.0000021 eth
                    value: parsedAmount._hex, // 0.00001 decimal number -> convert to gwei
                }]
            })
            
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)
            setIsLoading(true)
            console.log(`Loading ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false)
            console.log(`Success ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(Number(transactionCount));
        } catch (error) {
            console.log(error)
            throw new Error("No ethereum object");
        }
    }

    return (
        <TransactionContext.Provider 
            value={{
                checkIfWalletIsConnected,
                connectWallet,
                currentAccount,
                handleChangeForm,
                sendTransaction,
                formData
            }}>
            {children}
        </TransactionContext.Provider>
    )

}