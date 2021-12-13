import React, { useState } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { Provider } from 'react-redux';
import store from './Store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </Provider>
  )
}

export default App
