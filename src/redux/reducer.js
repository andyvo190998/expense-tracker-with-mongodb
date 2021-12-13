import {ADD_BALANCE, ADD_EDIT_BALANCE, DELETE_BALANCE, EDIT_BALANCE, FETCH_ALL} from './types';

// const initialState = {
//     transaction: [
//     {text: '',
//     amount: ''}
//   ]
// //   editBalance: {}
// };



const initialState = {
    item: []
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BALANCE: return {
            ...state,
            item: [action.payload, ...state]
        }

        case FETCH_ALL: return {...state, item:action.payload}

        case DELETE_BALANCE: return {
            ...state,
            item: state.item.filter((value) => (value._id !== action.payload))
        }
        // case ADD_EDIT_BALANCE: return {
        //     ...state,
        //     editBalance: action.payload
        // }
        case EDIT_BALANCE:
            // let updateItem = state.transaction.filter((item) => item.id === action.payload.id)
            // console.log(updateItem)
            let updateSomething = state.transaction.map((item) => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text,
                        amount: action.payload.amount
                    }
                } return item
            })

            console.log(updateSomething)

        return {
            ...state,
            transaction: updateSomething

        }
        default: return state;
    };
};

export default reducer;