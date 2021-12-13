import React from 'react';
import { useSelector } from 'react-redux';

const IncomeExpense = () => {
    const yourTransaction = useSelector((transaction) => (transaction.item));
    const amounts = yourTransaction.map((state) => (state.amount));
    const income = amounts
        .filter((amount) => (amount >= 0))
        .reduce((acc, current) => (acc += current), 0)
        .toFixed(2);

    const expense = amounts
        .filter((amount) => (amount < 0))
        .reduce((acc, current) => (acc += current), 0)
        .toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
