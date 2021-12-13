import React from 'react';
import { useSelector } from 'react-redux';

const Balance = () => {
    const yourBalance = useSelector((state) => (state.item));
    const amount = yourBalance.map((state) => (state.amount));
    const totalAmount = amount.reduce((accumulator, currentValue) => (accumulator += currentValue),0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalAmount}</h1>
        </>
    )
}


export default Balance
