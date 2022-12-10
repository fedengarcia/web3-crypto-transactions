import React, {createContext, useEffect, useState} from 'react';
import {getDefaultProvider, Contract} from 'ethers';
import {contractAddress, contracttABI} from '../CONSTANTS'

export const TransactionContext = createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = getDefaultProvider("ethereum")
    console.log(provider)
    // const provider = new provider.web3Provider(ethereum)
    // const signer = provider.getSigner();
    // const transactionContract = new Contract(contractAddress, contracttABI, signer)

    // console.log({
    //     provider, signer, transactionContract
    // })
}


export const TransactionProvider = ({children}) => {
    const [currentAccount, setCurrentAccount] =  useState({});
    const [formData,setFormData] = useState({
        address: '',
        amount: '',
        keyword: '',
        message: ''
    })

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
            const {address, amount, keyword, message} = formData;
            getEthereumContract()
            // get the data from the form
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