import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBalance, fetchExpense } from '../redux/actions';

const AddTransaction = ({ openUpdate, setOpenUpdate, updateObject, setUpdateObject }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const yourBalance = useSelector((state) => (state.item));
    // console.log(yourBalance)


    useEffect(() => {
        dispatch(fetchExpense())
    }, [yourBalance])



    const handleText = (e) => {
        setText(() => e.target.value);
    };

    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const fetchSome = () => {
        dispatch(fetchExpense())
    }

    const addTransaction = async (e) => {
        e.preventDefault();
        if (text === '') {
            alert('Please enter text ....')
        } else {
            const transaction = {
                text: text,
                amount: amount
            }
            console.log(transaction)
            dispatch(addBalance(transaction));
            setText('');
            setAmount(0);
        }

    };

    const [test, setTest] = useState({
        name: '',
        age: '',
        email: ''
    })

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={text} onChange={handleText} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input value={amount} onChange={handleAmount} type="number" placeholder="Enter amount..." />
                </div>
                <button onClick={addTransaction} className="btn">Add transaction</button>
            </form>
            <br />
        </>
    )
}

export default AddTransaction
