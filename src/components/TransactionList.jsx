import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBalance, addEditBalance, editBalance } from '../redux/actions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionList = () => {
    const history = useSelector((state) => state.item);
    const dispatch = useDispatch();

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {history.map((transaction) => {
                    const sign = transaction.amount < 0 ? '-' : "+"
                    return (
                        <li className={transaction.amount < 0 ? "minus" : "plus"} key={transaction._id}>
                            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                            <button onClick={() => dispatch(deleteBalance(transaction._id))} className="delete-btn"><DeleteIcon /></button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TransactionList
// () => dispatch(deleteBalance(transaction.id))