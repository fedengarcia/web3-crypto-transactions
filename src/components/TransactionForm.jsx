import React,{useState, useContext} from 'react';
import { TransactionContext } from '../context/TransactionContext';


const TransactionForm = () => {
    const {formData, sendTransaction, handleChangeForm} = useContext(TransactionContext); 



    const handleSubmit = (e) => {
        console.log(formData)
        const {address, amount, keyword, message} = formData;
        e.preventDefault()

        if(!address || !amount || !keyword || !message) return; 

        sendTransaction()
    }


    return (
        <form>
            <input placeholder="Address To" onChange={(e) => handleChangeForm(e,'address')}/>
            <input placeholder="Amount (ETH)" type="number" onChange={(e) => handleChangeForm(e,'amount')}/>
            <input placeholder="Keyword (GIF)" onChange={(e) => handleChangeForm(e,'keyword')}/>
            <input placeholder="Enter message" onChange={(e) => handleChangeForm(e,'message')}/>   

            <button
                type='button'
                className='btn_transaction'
                onClick={handleSubmit}
            >
                Send    
            </button> 
        </form>
    );
}

export default TransactionForm;
