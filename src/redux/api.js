import axios from "axios";

const url = "http://localhost:3001";

export const createExpense = (newExpense) => axios.post(`${url}/newexpense`, newExpense);

export const getExpense = () => axios.get(`${url}/expense/`)
export const deleteExpense = (id) => axios.delete(`${url}/delete/${id}`)