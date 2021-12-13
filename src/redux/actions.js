import { ADD_BALANCE, ADD_EDIT_BALANCE, DELETE_BALANCE, EDIT_BALANCE, FETCH_ALL } from './types';
import * as api from './api';


export const addBalance = (amount) => async (dispatch) => {

        const { data } = await api.createExpense(amount);
        dispatch({ type: ADD_BALANCE, payload: data })
        // console.log(data)

};

export const fetchExpense = () => async (dispatch) => {

    const { data } = await api.getExpense();
    // console.log(data )

    dispatch({ type: FETCH_ALL, payload: data });

};

export const deleteBalance = (id) => async (dispatch) => {
    console.log(id)
    await api.deleteExpense(id);
    dispatch({ type: DELETE_BALANCE, payload: id})
}



// export const deleteBalance = (id) => {
//     return {
//         type: DELETE_BALANCE,
//         payload: id
//     }
// };
export const editBalance = (object) => {
    return {
        type: EDIT_BALANCE,
        payload: object
    }
}

export const addEditBalance = (object) => {
    return {
        type: ADD_EDIT_BALANCE,
        payload: object
    }
}