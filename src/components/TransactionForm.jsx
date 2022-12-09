import React,{useState} from 'react';

const TransactionForm = () => {
    const [address,setAddress] = useState('')
    const [amount,setAmount] = useState('')
    const [gif,setGif] = useState('')
    const [message,setMessage] = useState('')



    const handleInput = (type,e) => {
        if(type === 'address') setAddress(e.target.value)
        if(type === 'amount') setAmount(e.target.value)
        if(type === 'message') setMessage(e.target.value)
        if(type === 'gif') {
            setGif(e.target.value)
        }
    }


    const sendTransaction = async (e) => {
        e.preventDefault();

        let item = {
            address:address,
            amount:amount,
            gif:gif,
            message:message
        }
        console.log(item)
    }

    return (
        <form>
            <input placeholder="Address To" onChange={(e) => handleInput('address',e)}/>
            <input placeholder="Amount (ETH)" onChange={(e) => handleInput('amount',e)}/>
            <input placeholder="Keyword (GIF)" onChange={(e) => handleInput('gif',e)}/>
            <input placeholder="Enter message" onChange={(e) => handleInput('message',e)}/>   

            <button
                type='button'
                className='btn_transaction'
                onClick={(e) =>  sendTransaction(e)}
            >
                Send    
            </button> 
        </form>
    );
}

export default TransactionForm;
